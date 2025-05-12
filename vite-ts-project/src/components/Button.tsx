
export const Button = (props) =>{
    const {size, color, title, onClick} = props;
    const defaultClass = "flex items-center rounded-2 h-[40px] w-[max-content] px-4 py-2 cursor-pointer";

    const classes = {
        colors:{
            primary:{
                button: "bg-[#000000]",
                text: "text-white",
            },
            secondary:{
                button: "bg-[#FFFFFF]",
                text: "text-dark",
            },
        },
        sizes: {
            small: "rounded-[100px] font-sm",
            medium: "rounded-[14px] font-base",
            large: "rounded-[16px] font-base min-h-[56px]",
        },
    };

    return(
        <div onClick ={onClick} className={defaultClass + " " + classes.sizes[size] + " " + classes.colors[color].button}>
            <div className={classes.colors[color].text}>
                {title}
            </div>
        </div>
    );
};
