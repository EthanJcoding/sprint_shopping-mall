import {Color_Btn} from "./Color_btn"

export default {
    title: "color_Btn/color_Btn",
    component: Color_Btn,
    argTypes: {
        color: {control : 'color'},
    }
};

export const Storybook_Color_Btn = (args: any) => (
    <Color_Btn {...args}></Color_Btn>
)