let machine = {
    current_State:  {
        name : 'start',
        key : 0
    },
    prev_State : {
        name : 'none',
        key : -1
    },
    input_String: [],
    StateMetrix : {
        start : {
            name : 'start',
            Hydrogen : 'H',
            Carbon : 'C',
            Nitrogen : 'N',
            Oxygen : 'O',
            Confirm : 'start',
            Reset : 'start',
            key : 0
        },
        H : {
            name : 'H',
            Hydrogen : 'HH',
            Carbon : 'CH',
            Nitrogen : 'NH',
            Oxygen : 'OH',
            Confirm : 'H',
            Reset : 'start',
            key : 1
        },
        C : {
            name : 'C',
            Hydrogen : 'CH',
            Carbon : 'CC',
            Nitrogen : 'CN',
            Oxygen : 'CO',
            Confirm : 'C',
            Reset : 'start',
            key : 2
        },
        N : {
            name : 'N',
            Hydrogen : 'NH',
            Carbon : 'CN',
            Nitrogen : 'NN',
            Oxygen : 'NO',
            Confirm : 'N',
            Reset : 'start',
            key : 3
        },
        O : {
            name : 'O',
            Hydrogen : 'OH',
            Carbon : 'CO',
            Nitrogen : 'NO',
            Oxygen : 'OO',
            Confirm : 'O',
            Reset : 'start',
            key : 4
        },
        HH : {
            name : 'HH',
            Hydrogen : 'HH',
            Carbon : 'HH',
            Nitrogen : 'HH',
            Oxygen : 'HH',
            Confirm : 'final',
            Reset : 'start',
            key : 5
        },
        CH : {
            name : 'CH',
            Hydrogen : 'CH',
            Carbon : 'CH',
            Nitrogen : 'CH',
            Oxygen : 'CH',
            Confirm : 'final',
            Reset : 'start',
            key : 6
        },
        NH : {
            name : 'NH',
            Hydrogen : 'NH',
            Carbon : 'NH',
            Nitrogen : 'NH',
            Oxygen : 'NH',
            Confirm : 'final',
            Reset : 'start',
            key : 7
        },
        OH : {
            name : 'OH',
            Hydrogen : 'OH',
            Carbon : 'OH',
            Nitrogen : 'OH',
            Oxygen : 'OH',
            Confirm : 'final',
            Reset : 'start',
            key : 8
        },
        CC : {
            name : 'CC',
            Hydrogen : 'CC',
            Carbon : 'CC',
            Nitrogen : 'CC',
            Oxygen : 'CC',
            Confirm : 'final',
            Reset : 'start',
            key : 9
        },
        CN : {
            name : 'CN',
            Hydrogen : 'CN',
            Carbon : 'CN',
            Nitrogen : 'CN',
            Oxygen : 'CN',
            Confirm : 'final',
            Reset : 'start',
            key : 10
        },
        CO : {
            name : 'CO',
            Hydrogen : 'CO',
            Carbon : 'CO',
            Nitrogen : 'CO',
            Oxygen : 'CO',
            Confirm : 'final',
            Reset : 'start',
            key : 11
        },
        NN : {
            name : 'NN',
            Hydrogen : 'NN',
            Carbon : 'NN',
            Nitrogen : 'NN',
            Oxygen : 'NN',
            Confirm : 'final',
            Reset : 'start',
            key : 12
        },
        NO : {
            name : 'NO',
            Hydrogen : 'NO',
            Carbon : 'NO',
            Nitrogen : 'NO',
            Oxygen : 'NO',
            Confirm : 'final',
            Reset : 'start',
            key : 13
        },
        OO : {
            name : 'OO',
            Hydrogen : 'OO',
            Carbon : 'OO',
            Nitrogen : 'OO',
            Oxygen : 'OO',
            Confirm : 'final',
            Reset : 'start',
            key : 14
        },
        final : {
            name : 'final',
            Hydrogen : 'trap',
            Carbon : 'trap',
            Nitrogen : 'trap',
            Oxygen : 'trap',
            Confirm : 'trap',
            Reset : 'trap',
            key : 15
        },
        trap : {
            name : 'trap',
            Hydrogen : 'trap',
            Carbon : 'trap',
            Nitrogen : 'trap',
            Oxygen : 'trap',
            Confirm : 'trap',
            Reset : 'trap',
            key : 16
        },

    },
    getNext : function (target) {
        let next = this.StateMetrix[this.current_State.name][target]
        return {name : next , key : this.StateMetrix[next].key}
    },
    setCurrentState : function (set) {
        this.current_State = set
    },
    Restart : function () {
        this.current_State = {
            name : 'start',
            key : 0
        };
        this.prev_State = {
            name : 'none',
            key : -1
        };
    }
}