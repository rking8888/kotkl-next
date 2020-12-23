import {Button as MaterialButton}  from "@material-ui/core"
export interface ButtonProps {
    //what to expect from the component
    title?: string;
    color?: string; //? means this is optional
}

export const Button = (
    //properties e.g. 'color'
    {title = "Benson's Button", color}: ButtonProps
)  => {
    return (
        <MaterialButton>
            {title}
        </MaterialButton>
    )

};

