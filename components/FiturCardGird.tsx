import { SimpleGrid } from "@chakra-ui/react";
import { FC } from "react";
import Card from "./Card";
import { FiCloudOff } from "react-icons/fi";
import { AiOutlineVideoCamera } from "react-icons/ai";
import { RiDeleteBinLine } from "react-icons/ri";
import { IoIosNotificationsOutline } from "react-icons/io";

const FiturCardGird: FC = () => {
  return (
    <SimpleGrid columns={{ base: 1, md: 2 }} gap={6} mt={8}>
      <Card icon={FiCloudOff} title="Si Rizal Gak Pernah Ngonten">
        Kalo lo pelupa ya udah dah, jadwal lo bakal gak kesimpen tuh.
      </Card>
      <Card icon={AiOutlineVideoCamera} title="Si Rizal Gak Pernah Ngonten">
        Emang sih dia gak pernah ngonten, do’ain ya biar mau ngonten.
      </Card>
      <Card icon={RiDeleteBinLine} title="Terhapus Otomatis">
        Data lo bakal kehapus otomatis tiap hari, biar hemat server kita.
      </Card>
      <Card icon={IoIosNotificationsOutline} title="Nggak Tau Lagi Gw">
        Mikir teks buat konten susah bro, ini aja ngasal masih susah!
      </Card>
    </SimpleGrid>
  );
};

export default FiturCardGird;
