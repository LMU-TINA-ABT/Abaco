import {configureStore, createSlice, PayloadAction} from '@reduxjs/toolkit'

export type AbacoSlice = {
    plaettchenState: PlaettchenSlice[],
    isColoring: boolean,
    coloringId: number,
    currentMove?: { x: number, y: number }
}

export type PlaettchenSlice = {
    id: number,
    color: string
}

function getInitialPlaettchenState() {
    const array = [];
    for (let i = 1; i < 21; i++) {
        array.push({id: i, color: "grey"});
    }
    return array;
}

const initialAbacoState = {
    paintBoxColor: "blue",
    plaettchenState: getInitialPlaettchenState(),
    isColoring: false,
    coloringId: 0,
    text: ""
}

const AbacoSlice = createSlice({
    name: 'abaco',
    initialState: initialAbacoState,
    reducers: {
        setPlaettchen: (state, action: PayloadAction<PlaettchenSlice[]>) => {
            state.plaettchenState = action.payload
        },
        setPlaettchenColor: (state, action: PayloadAction<PlaettchenSlice>) => {
            state.plaettchenState.map((plaettchen: PlaettchenSlice) => {
                if (plaettchen.id === action.payload.id) {
                    plaettchen.color = action.payload.color;
                }
                return plaettchen;
            })
        },
        colorAllPlaettchenGrey: (state) => {
            state.plaettchenState.map((plaettchen: PlaettchenSlice) => {
                plaettchen.color = "grey";
                return plaettchen;
            })
        },
        setIsColoring: (state, action: PayloadAction<boolean>) => {
            state.isColoring = action.payload;
        },
        setCurrentMove: (state, action: PayloadAction<{ x: number, y: number }>) => {
            // @ts-ignore
            state.currentMove = (action.payload);
        },
        setColoringId: (state, action: PayloadAction<number>) => {
            state.coloringId = (action.payload);
        },
    }
})

export const {
    setPlaettchen,
    colorAllPlaettchenGrey,
    setColoringId,
    setCurrentMove,
    setPlaettchenColor,
    setIsColoring
} = AbacoSlice.actions

export const store = configureStore({
    reducer: AbacoSlice.reducer,
    preloadedState: initialAbacoState
})