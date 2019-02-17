import { CHANGE_BACKGROUND, CHANGE_COLOR_OPTION } from './themeActionTypes';

export const changeBackground = backgroundOption => ({
    action: CHANGE_BACKGROUND,
    payload: {
        background: backgroundOption
    }
});

export const changeColorOption = colorOption => ({
    action: CHANGE_COLOR_OPTION,
    payload: {
        color: colorOption
    }
});