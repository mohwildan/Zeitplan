import { SimpleGrid } from "@chakra-ui/react";
import Card from "./Card";
import { FiDatabase } from "react-icons/fi";
import { BiErrorCircle, BiCommentError } from "react-icons/bi";
import { AiOutlineUser } from "react-icons/ai";

const GridCard = () => {
  return (
    <SimpleGrid columns={{ base: 1, md: 2 }} gap={6} mt={{ base: 8, md: 0 }}>
      <Card icon={FiDatabase} title="Aplikasi Gratis">
        Semua fitur di aplikasi ini adalah gratis, tapi data privasi kamu akan
        kami jual ke agen khusus US.
      </Card>
      <Card icon={BiErrorCircle} title="Kode OTP Error">
        Pas login kode OTP lo gak kekirim kadang, terus lo harus nyoba berulang
        kali sampe bisa.
      </Card>
      <Card icon={AiOutlineUser} title="Data Tidak Aman">
        Data tidak disimpan dengan baik dan rentan bocor, jangan heran data lo
        tiba-tiba ada di deepweb.
      </Card>
      <Card icon={BiCommentError} title="Biasanya Error">
        Ketika submit data biasanya error di bagian ajax-nya, eh nggak deng itu
        aplikasi pemerintah~
      </Card>
    </SimpleGrid>
  );
};

export default GridCard;
