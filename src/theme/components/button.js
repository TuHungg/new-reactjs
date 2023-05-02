export const buttonStyles = {
  components: {
    Button: {
      variants: {
        transparent: {
          bg: "transparent",
          _hover: {
            bg: "gray.800",
          },
        },
        // "no-hover": {
        //   _hover: {
        //     boxShadow: "none",
        //   },
        // },
        // "transparent-with-icon": {
        //   bg: "transparent",
        //   fontWeight: "bold",
        //   borderRadius: "inherit",
        //   cursor: "pointer",
        //   _active: {
        //     bg: "transparent",
        //     transform: "none",
        //     borderColor: "transparent",
        //   },
        //   _focus: {
        //     boxShadow: "none",
        //   },
        //   _hover: {
        //     boxShadow: "none",
        //   },
        // },
      },
      baseStyle: {
        display: "flex",
        alignItems: "center",
        gap: 2,
        px: 4,
        borderRadius: "md",
        flexShrink: 0,

        fontWeight: "semibold",

        transitionDuration: "300ms",
      },
    },
  },
};
