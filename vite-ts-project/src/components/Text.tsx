
export const Text = (props) => {
    const { size, color, weight, children } = props;
    const defaultClass = "font-sans";

    const classes = {
        colors: {
            primary: "text-amber-700",
            secondary: "text-red-500",
            dark: "text-gray-900",
            light: "text-gray-400",
        },
        sizes: {
            small: "text-sm",
            medium: "text-base",
            large: "text-lg",
            xlarge: "text-xl",
        },
        weights: {
            normal: "font-normal",
            medium: "font-medium",
            bold: "font-bold",
        }
    };

    return (
        <p class={defaultClass + " " + classes.sizes[size]+ " " + classes.colors[color]+ " " + classes.weights[weight]}>
            {children}
        </p>
    );
};
