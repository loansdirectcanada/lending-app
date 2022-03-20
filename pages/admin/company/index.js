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
} from "@chakra-ui/react";
import Drawer from "../../../components/admin/drawerCompany";
import db from "../../../firebase";

import AdminNav from "../../../components/adminNavbar";

const Lending = () => {
  const [AllCompanies, setAllCompanies] = React.useState([]);
  const [business, setBusiness] = React.useState({});
  const getAllLoansInfo = async () => {
    const loans = await db.collection("company_loans_applications").get();
    setAllCompanies(loans.docs.map((doc) => doc.data()));
  };
  useEffect(() => {
    getAllLoansInfo();
  }, []);
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
        {" "}
        Company application
      </Text>

      {AllCompanies.length === 0 ? (
        <Box height={["100vh", "100vh", "100vh", "100vh"]}></Box>
      ) : (
        <Box height={["100%", "100%", "100%", "100%"]}>
          <Table variant="striped">
            <Thead>
              <Tr>
                <Th>Company name</Th>
                <Th>Contact Information</Th>
                <Th>Industrial Activities / Category:</Th>
                <Th>State</Th>
              </Tr>
            </Thead>
            <Tbody>
              {AllCompanies.map((Company) => (
                <Tr key={Company.id}>
                  <Td>{Company?.company_name}</Td>
                  <Td> {Company?.productwork}</Td>
                  <Td>{Company?.Describe}</Td>
                  <Td>{Company?.basedyc}</Td>
                  <Td
                    onClick={() => {
                      console.log(Company);
                      setBusiness(Company);
                    }}
                  >
                    <Drawer business={business} />
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
