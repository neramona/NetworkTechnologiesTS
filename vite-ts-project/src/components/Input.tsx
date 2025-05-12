
export const Input = (props) => {
    const { size, color, placeholder, value, onChange} = props;
    const defaultClass = "flex items-center rounded-2 h-[40px] px-4 py-2 border focus:outline-none focus:ring-2";

    const classes = {
        colors: {
            primary: {
                border: "border-amber-700 focus:ring-amber-300",
                text: "text-amber-900",
            },
            secondary: {
                border: "border-red-500 focus:ring-red-300",
                text: "text-red-900",
            },
            gray: {
                border: "border-gray-300 focus:ring-gray-300",
                text: "text-gray-900",
            },
        },
        sizes: {
            small: "h-[32px] text-sm",
            medium: "h-[40px] text-base",
            large: "h-[48px] text-lg",
        },
    };

    return (
        <input
            className={defaultClass + " " + classes.sizes[size] + " " + classes.colors[color].border + " " + classes.colors[color].text + " "}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
        />
    );
};