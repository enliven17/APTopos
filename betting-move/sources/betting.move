module 0xea0dd23db979ddd6965505226d310bf52bf8d6087cc968d6760d54728d4ab5be::betting {

    use std::signer;
    use std::option;
    use std::string;
    use aptos_framework::coin::Coin;
    use aptos_framework::aptos_coin::AptosCoin;
    use std::vector;

    struct Bet has copy, drop, store {
        user: address,
        amount: u64,
    }

    struct Market has key, store, copy {
        id: u64,
        creator: address,
        title: string::String,
        description: string::String,
        closes_at: u64,
        min_bet: u64,
        max_bet: u64,
        total_yes: u64,
        total_no: u64,
        closed: bool,
        result: option::Option<bool>,
        bets_yes: vector<Bet>,
        bets_no: vector<Bet>,
        claimed: vector<address>,
    }

    struct Markets has key {
        markets: vector<Market>,
        next_id: u64,
    }

    public entry fun init(account: &signer) {
        move_to(account, Markets { markets: vector::empty<Market>(), next_id: 0 });
    }

    public entry fun create_market(
        account: &signer,
        title: string::String,
        description: string::String,
        closes_at: u64,
        min_bet: u64,
        max_bet: u64
    ) acquires Markets {
        let addr = signer::address_of(account);
        let markets = borrow_global_mut<Markets>(addr);
        let market = Market {
            id: markets.next_id,
            creator: addr,
            title,
            description,
            closes_at,
            min_bet,
            max_bet,
            total_yes: 0,
            total_no: 0,
            closed: false,
            result: option::none<bool>(),
            bets_yes: vector::empty<Bet>(),
            bets_no: vector::empty<Bet>(),
            claimed: vector::empty<address>(),
        };
        vector::push_back(&mut markets.markets, market);
        markets.next_id = markets.next_id + 1;
    }

    /// NOT: Kullanıcı, bu fonksiyonu çağırmadan önce amount kadar APT'yi kontrat adresine transfer etmelidir.
    public entry fun place_bet(account: &signer, market_id: u64, yes: bool, amount: u64) acquires Markets {
        let addr = signer::address_of(account);
        let markets = borrow_global_mut<Markets>(addr);
        let market = &mut markets.markets[market_id];
        assert!(!market.closed, 100);
        let bet = Bet { user: addr, amount };
        if (yes) {
            vector::push_back(&mut market.bets_yes, bet);
            market.total_yes = market.total_yes + amount;
        } else {
            vector::push_back(&mut market.bets_no, bet);
            market.total_no = market.total_no + amount;
        }
    }

    public entry fun close_market(account: &signer, market_id: u64, result: bool) acquires Markets {
        let addr = signer::address_of(account);
        let markets = borrow_global_mut<Markets>(addr);
        let market = &mut markets.markets[market_id];
        assert!(market.creator == addr, 101);
        assert!(!market.closed, 102);
        market.closed = true;
        market.result = option::some<bool>(result);
    }

    public entry fun claim_reward(account: &signer, market_id: u64) acquires Markets {
        let addr = signer::address_of(account);
        let markets = borrow_global_mut<Markets>(addr);
        let market = &mut markets.markets[market_id];
        assert!(market.closed, 200);
        assert!(option::is_some(&market.result), 201);
        let already_claimed = contains_address(&market.claimed, addr, 0);
        assert!(!already_claimed, 202);
        let win_amount = if (*option::borrow(&market.result) == true) {
            let amount = find_bet_amount(&market.bets_yes, addr, 0);
            let total_yes = market.total_yes;
            if (amount > 0) {
                claim_reward_inner(account, market, amount, total_yes)
            } else {
                0
            }
        } else {
            let amount = find_bet_amount(&market.bets_no, addr, 0);
            let total_no = market.total_no;
            if (amount > 0) {
                claim_reward_inner(account, market, amount, total_no)
            } else {
                0
            }
        };
        assert!(win_amount > 0, 203);
    }

    public fun get_markets(): vector<Market> acquires Markets {
        let addr = @0x6010ec52c45f2a2b1599cce4078a822d0fe70e4830f990c3e48bc49ba721b410;
        let markets = borrow_global<Markets>(addr);
        markets.markets
    }

    fun find_bet_amount(bets: &vector<Bet>, addr: address, idx: u64): u64 {
        let len = vector::length(bets);
        if (idx >= len) {
            0
        } else {
            let bet = *vector::borrow(bets, idx);
            if (bet.user == addr) {
                bet.amount
            } else {
                find_bet_amount(bets, addr, idx + 1)
            }
        }
    }

    fun contains_address(addrs: &vector<address>, addr: address, idx: u64): bool {
        let len = vector::length(addrs);
        if (idx >= len) {
            false
        } else {
            let a = *vector::borrow(addrs, idx);
            if (a == addr) {
                true
            } else {
                contains_address(addrs, addr, idx + 1)
            }
        }
    }

    fun claim_reward_inner(account: &signer, market: &mut Market, amount: u64, total: u64): u64 {
        let addr = signer::address_of(account);
        let win_amount = (market.total_yes + market.total_no) * amount / total;
        assert!(win_amount > 0, 203);
        aptos_framework::coin::transfer<AptosCoin>(account, addr, win_amount);
        vector::push_back(&mut market.claimed, addr);
        win_amount
    }
} 