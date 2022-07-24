import { Flex } from "@chakra-ui/react";
import { FC } from "react";
import CardHargaItems from "./CardHargaItems";
import ListItemImage from "./ListItemImage";

const CardHarga: FC = () => {
  return (
    <Flex
      gap="2rem"
      justifyContent="center"
      alignItems={{ base: "center", md: "start" }}
      flexDir={{ base: "column", md: "row" }}
      px={3}
    >
      <CardHargaItems
        badge="RINDURATU"
        title="Free"
        des="Akses ke semua fitur gratis tapi data lo dijual ke agen khusus US."
      >
        <ListItemImage>Jadwal Tak Terbatas</ListItemImage>
        <ListItemImage>Fitur Notifikasi (Kadang Telat)</ListItemImage>
        <ListItemImage>Mode Gelap</ListItemImage>
        <ListItemImage>Bisa Topup Pulsa</ListItemImage>
        <ListItemImage>Bisa Beli Token Listrik</ListItemImage>
        <ListItemImage>Data Lo Dijual</ListItemImage>
      </CardHargaItems>
      <CardHargaItems
        badge="SULTAN"
        title="Rp 100K"
        des="Sama aja data lo juga tetep dijual, tapi lo dapet fitur yang lain."
      >
        <ListItemImage>Semua Fitur Sebelumnya</ListItemImage>
        <ListItemImage>Diingetin Makan</ListItemImage>
        <ListItemImage>Sleepcall Sampe Bobo</ListItemImage>
        <ListItemImage>Ditemenin Jalan Tiap Minggu</ListItemImage>
        <ListItemImage>Ditemenin Nonton Eksekswan</ListItemImage>
        <ListItemImage>Terhindar Razia Rambut</ListItemImage>
        <ListItemImage>Dapet Izin Bikin Ormas</ListItemImage>
      </CardHargaItems>
      <CardHargaItems
        badge="RAFATAR"
        title="Rp 10000K"
        des="Ini juga sama aja, data lo dijual juga. Tapi fitur-fiturnya lebih ok."
      >
        <ListItemImage>Semua Fitur Sebelumnya</ListItemImage>
        <ListItemImage>Dibayarin Kuliah 4 Semester</ListItemImage>
        <ListItemImage>Dibayarin Cicilan Motor</ListItemImage>
        <ListItemImage>Dicicilin KPR 12 Tahun</ListItemImage>
        <ListItemImage>Magang di NASA Cab. Depok</ListItemImage>
        <ListItemImage>Dapet Skin Alok</ListItemImage>
        <ListItemImage>Nonton Film Gratis di Ganool</ListItemImage>
        <ListItemImage>Naik Haji Bila Mampu</ListItemImage>
      </CardHargaItems>
    </Flex>
  );
};

export default CardHarga;
