import { Box, Container } from "@chakra-ui/react";
import { routeUrls } from "configs";
import PropTypes from "prop-types";
import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useConfigsStore } from "stores";

const Main = (props) => {
  const routeLocation = useLocation();
  const { children } = props;
  const [, updateConfigStore] = useConfigsStore();

  useEffect(() => {
    const pathList = routeLocation.pathname.split("/");
    switch (pathList[1]) {

      // case routeUrls.logInPage.path: // route dynamic
      //   const keyword = decodeURI(pathList.at(-1));
      //   updateConfigStore((draft) => {
      //     draft.activeTitle = `${routeUrls.logInPage.title}: ${keyword}`;
      //   });
      //   break;
      // case routeUrls.logInPage.path:
      //   break;
      default:
        const key = Object.keys(routeUrls).filter((item) => routeUrls[item].path === pathList[1]);
        updateConfigStore((draft) => {
          draft.activeTitle = `${routeUrls[key].title}`;
        });
        break;
    }
  }, [routeLocation.pathname]);

  return (
    <Box minH="100vh">
      <Container
        as="main"
        maxW={["100%", "container.sm", "container.md", "container.lg", "74rem"]}
        minH="80vh"
      >
        {children}
      </Container>
    </Box>
  );
};

Main.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Main;
