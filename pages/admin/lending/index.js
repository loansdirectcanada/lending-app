import React, { useEffect } from "react";
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  ChakraProvider,
  Box,
  Heading,
  Text,
  useColorModeValue,
  Button,
} from "@chakra-ui/react";
import Drawer from "../../../components/admin/drawer";
import db from "../../../firebase";

import AdminNav from "../../../components/adminNavbar";

const Lending = () => {
  const [Allloans, setAllloans] = React.useState([]);
  const [business, setBusiness] = React.useState({});
  const [dependency, setDependency] = React.useState(5);
  const getAllLoansInfo = async () => {
    const loans = await db.collection("loans_applications").get();
    setAllloans(loans.docs.map((doc) => doc.data()));
  };

  const deleteLonaById = (id) => {
    console.log(id, "ididid");
    db.collection("loans_applications")
      .where("id", "==", id)
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          doc.ref.delete();
        });
      })
      .then(async () => {
        const loans = await db.collection("loans_applications").get();
        console.log(loans.docs.map((doc) => doc.data()));
        setAllloans(loans.docs.map((doc) => doc.data()));
        const random = Math.floor(Math.random() * 100);
        setDependency(random);
      });
  };
  useEffect(() => {
    getAllLoansInfo();
  }, [dependency]);
  return (
    <ChakraProvider>
      <AdminNav />
      <Text
        ml={5}
        mt={10}
        mb={10}
        fontWeight="bold"
        color={useColorModeValue("gray.500", "gray.300")}
        fontSize="4xl"
      >
        Lending application
      </Text>
      {Allloans.length === 0 ? (
        <Box
          height={["100vh", "100vh", "100vh", "100vh"]}
          minHeight="100vh"
        ></Box>
      ) : (
        <Box height={["100%", "100%", "100%", "100%"]} minHeight="100vh">
          <Table variant="striped">
            <Thead>
              <Tr>
                <Th>Name</Th>
                <Th>Phone number</Th>
                <Th>Email</Th>
                <Th>Business name</Th>
              </Tr>
            </Thead>
            <Tbody>
              {Allloans.map((loan) => (
                <Tr key={loan.id}>
                  <Td>{loan?.first_name}</Td>
                  <Td> {loan?.phone}</Td>
                  <Td>{loan?.email}</Td>
                  <Td>{loan?.business_name}</Td>
                  <Td
                    onClick={() => {
                      console.log(loan);
                      setBusiness(loan);
                    }}
                  >
                    <Drawer business={business} />
                  </Td>
                  <Td>
                    <Button
                      variantColor="red"
                      onClick={() => deleteLonaById(loan.id)}
                    >
                      Delete
                    </Button>
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </Box>
      )}
    </ChakraProvider>
  );
};

export default Lending;
