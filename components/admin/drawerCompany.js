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
                      {business?.company_name}
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
                        Company application Details
                      </Text>

                      <List spacing={2}>
                        <ListItem>
                          <Text as={"span"} fontWeight={"bold"}>
                            Company name:
                          </Text>{" "}
                          ${business?.company_name}
                        </ListItem>
                        <ListItem>
                          <Text as={"span"} fontWeight={"bold"}>
                            Company url, if any:
                          </Text>{" "}
                          {business?.Companyurl}
                        </ListItem>
                        <ListItem>
                          <Text as={"span"} fontWeight={"bold"}>
                            Contact Information(Phone number):
                          </Text>{" "}
                          {business?.productwork}
                        </ListItem>
                        <ListItem>
                          <Text as={"span"} fontWeight={"bold"}>
                            Industrial Activities / Category:
                          </Text>{" "}
                          {business?.Describe}
                        </ListItem>
                        <ListItem>
                          <Text as={"span"} fontWeight={"bold"}>
                            Number of employees:
                          </Text>{" "}
                          {business?.Company_profession}
                        </ListItem>
                        <ListItem>
                          <Text as={"span"} fontWeight={"bold"}>
                            State:
                          </Text>{" "}
                          {business?.basedyc}
                        </ListItem>
                        <ListItem>
                          <Text as={"span"} fontWeight={"bold"}>
                            Personal email address of the CEO who is filling out
                            this application:
                          </Text>{" "}
                          {business?.founder_email}
                        </ListItem>
                        <ListItem>
                          <Text as={"span"} fontWeight={"bold"}>
                            Please provide the personal email address of the
                            founder /owner of the company:
                          </Text>{" "}
                          ${business?.Founder_email_2}
                        </ListItem>
                        <ListItem>
                          <Text as={"span"} fontWeight={"bold"}>
                            How many co-founders are on the team?:
                          </Text>{" "}
                          {business?.team}
                        </ListItem>
                        <ListItem>
                          <Text as={"span"} fontWeight={"bold"}>
                            What will make it hard for others to rise above
                            you?:
                          </Text>{" "}
                          {business?.category}
                        </ListItem>
                        <ListItem>
                          <Text as={"span"} fontWeight={"bold"}>
                            What makes you a game-changer?:
                          </Text>{" "}
                          {business?.located}
                        </ListItem>
                        <ListItem>
                          <Text as={"span"} fontWeight={"bold"}>
                            How much money comes into your business in a year?:
                          </Text>{" "}
                          {business?.along}
                        </ListItem>
                        <ListItem>
                          <Text as={"span"} fontWeight={"bold"}>
                            How long will it take you to make profit or to
                            recoup the investment?:
                          </Text>{" "}
                          {business?.product}
                        </ListItem>
                        <ListItem>
                          <Text as={"span"} fontWeight={"bold"}>
                            Why did you pick this idea to work on? Do you have
                            domain expertise in this area? How do you know this
                            is going to work?:
                          </Text>{" "}
                          {business?.expertise}
                        </ListItem>
                        <ListItem>
                          <Text as={"span"} fontWeight={"bold"}>
                            What do you understand about your space that other
                            companys just don&apos;t get?:
                          </Text>{" "}
                          {business?.understand}
                        </ListItem>
                        <ListItem>
                          <Text as={"span"} fontWeight={"bold"}>
                            How do or will you make money? How much could you
                            make?:
                          </Text>{" "}
                          {business?.business_strategy}
                        </ListItem>
                        <ListItem>
                          <Text as={"span"} fontWeight={"bold"}>
                            Have you formed ANY legal entity yet?
                          </Text>{" "}
                          {business?.formed}
                        </ListItem>
                        <ListItem>
                          <Text as={"span"} fontWeight={"bold"}>
                            Have you issued stock to investors?:
                          </Text>{" "}
                          {business?.investors}
                        </ListItem>
                        <ListItem>
                          <Text as={"span"} fontWeight={"bold"}>
                            Have you raised money using crowdfunding?:
                          </Text>{" "}
                          {business?.raised}
                        </ListItem>
                        <ListItem>
                          <Text as={"span"} fontWeight={"bold"}>
                            How much money do you spend per month?:
                          </Text>{" "}
                          {business?.spend}
                        </ListItem>
                        <ListItem>
                          <Text as={"span"} fontWeight={"bold"}>
                            How much money does your company have in the bank
                            now?:
                          </Text>{" "}
                          {business?.bank_account_has}
                        </ListItem>
                        <ListItem>
                          <Text as={"span"} fontWeight={"bold"}>
                            How long is your runway?:
                          </Text>{" "}
                          {business?.runway}
                        </ListItem>
                        <ListItem>
                          <Text as={"span"} fontWeight={"bold"}>
                            Please provide any other relevant information about
                            the structure or formation of the company.:
                          </Text>{" "}
                          {business?.formation}
                        </ListItem>
                        <ListItem>
                          <Text as={"span"} fontWeight={"bold"}>
                            Is your business registered by government? If yes,
                            state your business and tax registration numbers.:
                          </Text>{" "}
                          {business?.nonFounder}
                        </ListItem>
                        <ListItem>
                          <Text as={"span"} fontWeight={"bold"}>
                            Have you received any government grants? If so, list
                            the grants you&apos;ve received, including the terms
                            of the grant, who it&apos;s from, what it covers,
                            and when you received it.:
                          </Text>{" "}
                          {business?.government}
                        </ListItem>
                        <ListItem>
                          <Text as={"span"} fontWeight={"bold"}>
                            FINANCIAL PROJECTIONS (PDF, PPT, PPTX, DOC, DOCX,
                            XLS, XLSX):
                          </Text>{" "}
                          <a
                            href={business?.financial_projection_file}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            File
                          </a>
                        </ListItem>
                        <ListItem>
                          <Text as={"span"} fontWeight={"bold"}>
                            EXECUTIVE SUMMARY (PDF, PPT, PPTX, DOC, DOCX)
                          </Text>{" "}
                          <a
                            href={business?.exclusive_summary_file}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            File
                          </a>
                        </ListItem>
                        <ListItem>
                          <Text as={"span"} fontWeight={"bold"}>
                            What convinced you to apply? Did someone encourage
                            you to apply?:
                          </Text>{" "}
                          {business?.encourage}
                        </ListItem>
                        <ListItem>
                          <Text as={"span"} fontWeight={"bold"}>
                            How did you hear about us?:
                          </Text>{" "}
                          {business?.Combinator}
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
