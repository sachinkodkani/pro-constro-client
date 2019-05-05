import { CHANGE_BACKGROUND, CHANGE_COLOR_OPTION } from './themeActionTypes';
import { base, darkTheme, lightTheme, colorOptions } from 'res/theme';
import { backgrounds, colors } from './constants';

const initialState = {
    theme: {
        base: base,
        background: lightTheme,
        colorOption: colorOptions.cyan
    }
};

const themeReducer = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_BACKGROUND: {
            const { background } = action.payload;
            return {
                ...state, background: background === backgrounds.light ? lightTheme : darkTheme
            }
        }
        // develop dynamic logic
        case CHANGE_COLOR_OPTION: {
            return {
                ...state, colorOption: colorOptions.blue
            }
        }
        default:
            return state;
    }
}

export default themeReducer;