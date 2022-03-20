import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Button,
  Box,
  chakra,
  Container,
  Stack,
  Text,
  Image,
  Flex,
  VStack,
  Heading,
  SimpleGrid,
  StackDivider,
  useColorModeValue,
  VisuallyHidden,
  List,
  ListItem,
} from "@chakra-ui/react";
import React from "react";
function DrawerExample({ business }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  return (
    <>
      <Button ref={btnRef} colorScheme="teal" onClick={onOpen}>
        Open
      </Button>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
        size="xl"
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Application details</DrawerHeader>

          <DrawerBody>
            <Container maxW={"7xl"}>
              <SimpleGrid
                columns={{ base: 1, lg: 2 }}
                spacing={{ base: 8, md: 10 }}
                py={{ base: 18, md: 24 }}
              >
                <Stack spacing={{ base: 6, md: 10 }}>
                  <Box as={"header"}>
                    <Heading
                      lineHeight={1.1}
                      fontWeight={600}
                      fontSize={{ base: "2xl", sm: "4xl", lg: "5xl" }}
                    >
                      {business?.business_name}
                    </Heading>
                  </Box>

                  <Stack
                    spacing={{ base: 4, sm: 6 }}
                    direction={"column"}
                    divider={
                      <StackDivider
                        borderColor={useColorModeValue("gray.200", "gray.600")}
                      />
                    }
                  >
                    <Box>
                      <Text
                        fontSize={{ base: "16px", lg: "18px" }}
                        color={useColorModeValue("yellow.500", "yellow.300")}
                        fontWeight={"500"}
                        textTransform={"uppercase"}
                        mb={"4"}
                      >
                        Loan Details
                      </Text>

                      <List spacing={2}>
                        <ListItem>
                          <Text as={"span"} fontWeight={"bold"}>
                            How much do you need? :
                          </Text>{" "}
                          ${business?.money_need}
                        </ListItem>
                        <ListItem>
                          <Text as={"span"} fontWeight={"bold"}>
                            How long would you like the loan for? :
                          </Text>{" "}
                          {business?.time_duration_in_number}{" "}
                          {business?.time_duration}
                        </ListItem>
                        <ListItem>
                          <Text as={"span"} fontWeight={"bold"}>
                            How soon would you like the loan? :
                          </Text>{" "}
                          {business?.loan_rush}
                        </ListItem>
                        <ListItem>
                          <Text as={"span"} fontWeight={"bold"}>
                            Lets narrow it down, choose the main purpose of the
                            loan. :
                          </Text>{" "}
                          {business?.main_purpose}
                        </ListItem>
                        <ListItem>
                          <Text as={"span"} fontWeight={"bold"}>
                            And finally, please specify the reason in a few
                            words.:
                          </Text>{" "}
                          {business?.reason_description}
                        </ListItem>
                        <ListItem>
                          <Text as={"span"} fontWeight={"bold"}>
                            What best describes your industry? :
                          </Text>{" "}
                          {business?.your_industry}
                        </ListItem>
                        <ListItem>
                          <Text as={"span"} fontWeight={"bold"}>
                            Business name:
                          </Text>{" "}
                          {business?.business_name}
                        </ListItem>
                        <ListItem>
                          <Text as={"span"} fontWeight={"bold"}>
                            What’s the average monthly sales? :
                          </Text>{" "}
                          ${business?.average_monthly_sales}
                        </ListItem>
                        <ListItem>
                          <Text as={"span"} fontWeight={"bold"}>
                            Do you invoice customers? :
                          </Text>{" "}
                          {business?.do_you_invoice}
                        </ListItem>
                        <ListItem>
                          <Text as={"span"} fontWeight={"bold"}>
                            First name:
                          </Text>{" "}
                          {business?.first_name}
                        </ListItem>
                        <ListItem>
                          <Text as={"span"} fontWeight={"bold"}>
                            Last name:
                          </Text>{" "}
                          {business?.last_name}
                        </ListItem>
                        <ListItem>
                          <Text as={"span"} fontWeight={"bold"}>
                            Email:
                          </Text>{" "}
                          {business?.email}
                        </ListItem>
                        <ListItem>
                          <Text as={"span"} fontWeight={"bold"}>
                            Phone:
                          </Text>{" "}
                          {business?.phone}
                        </ListItem>
                      </List>
                    </Box>
                  </Stack>
                </Stack>
              </SimpleGrid>
            </Container>
          </DrawerBody>

          <DrawerFooter>
            <Button variant="outline" mr={3} onClick={onClose}>
              Cancel
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default DrawerExample;
