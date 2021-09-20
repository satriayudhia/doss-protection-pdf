import React from "react";
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  Font,
} from "@react-pdf/renderer";
import {
  Table,
  TableCell,
  TableHeader,
  TableBody,
  DataTableCell,
} from "@david.kucsai/react-pdf-table";
import moment from "moment";
import "moment/locale/id";
import Helvetica from "../assets/fonts/Helvetica.ttf";

Font.register({
  family: "Helvetica",
  src: "https://fonts.googleapis.com/css2?family=Lato&display=swap",
});

// Create styles
const styles = StyleSheet.create({
  noBorder: {
    border: "1px solid #FFFF !important",
  },
  page: {
    flexDirection: "row",
    backgroundColor: "#FFFF",
  },
  sectionCenter: {
    margin: 10,
    padding: 25,
    flexGrow: 1,
    width: "100%",
  },
  header: {
    fontSize: "14px",
    fontWeight: 900,
    textAlign: "center",
  },
  subHeader: {
    fontSize: "12px",
    fontWeight: 900,
    textAlign: "center",
    marginBottom: "10px",
  },
  text: {
    fontFamily: "Helvetica",
    fontSize: "10px",
    lineHeight: "1.5px",
    textAlign: "justify",
  },
  textBold: {
    fontFamily: "Helvetica",
    fontSize: "12px",
    fontWeight: "bold",
  },
  textForm: {
    fontSize: "12px",
    lineHeight: "1.5px",
  },
  textSmall: {
    fontSize: "10px",
  },
  textSmallForm: {
    fontSize: "10px",
    lineHeight: "1.5px",
  },
  textTable: {
    fontSize: "12px",
  },
  textRight: {
    fontSize: "12px",
    textAlign: "right",
  },
  gap20: {
    marginTop: 20,
  },
  gap10: {
    marginTop: 10,
  },
  ml20: {
    marginLeft: 12,
  },
});

// Create Document Component
const MyDocument = ({ data }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.sectionCenter}>
        <Text style={styles.header}>SURAT RANGKUMAN PERLINDUNGAN</Text>
        <Text style={styles.header}>DOSS PROTECTION EXTENDED WARRANTY</Text>
        <Text style={styles.gap20}></Text>
        <Text style={styles.textSmall}>
          Dokumen ini merangkum jaminan dan cara klaim Doss Protection
        </Text>
        <Text style={styles.gap20}></Text>
        <Text style={styles.textForm}>
          NOMOR SERTIFIKAT {"  "} : {"  "} {data["Nomor Polis"]}
        </Text>
        <Text style={styles.textForm}>
          PELANGGAN {"               "} : {"  "} {data["Nama Lengkap"]}
        </Text>
        <Text style={styles.textForm}>
          ALAMAT {"                       "} : {"  "} {data["Alamat"]}
          {", "}
          {data["Kota"]}
          {", "}
          {data["Kode Pos"]}
        </Text>
        <Text style={styles.textForm}>
          JENIS JAMINAN {"          "} : {"  "} {data["Jenis Polis"]}
        </Text>
        <Text style={styles.textForm}>
          PERIODE JAMINAN {"    "} : {"  "}{" "}
          {moment(data["Periode Mulai"]).locale("id").format("ll")} -{" "}
          {moment(data["Periode Akhir"]).locale("id").format("ll")}
        </Text>
        <Text style={styles.textSmallForm}>
          {" "}
          {"                                                    "}Sejak Pukul
          12.00 pada waktu dimana Objek Pertanggungan berada
        </Text>
        <Text style={styles.textForm}>
          CATATAN {"                      "} : {"  "} EW
        </Text>
        <Text style={styles.textForm}>
          BATAS WILAYAH {"          "} : {"  "} INDONESIA
        </Text>

        <Text style={styles.gap20}></Text>

        <Text style={styles.subHeader}>OBJEK PERTANGGUNGAN</Text>

        <Table
          data={[
            {
              description: data["Tipe kamera / lensa yang dibeli"],
              unit: "1",
              nominal: data["Masukkan harga kamera / lensa yang dibeli"],
            },
          ]}
        >
          <TableHeader textAlign={"center"} style={styles.textTable}>
            <TableCell>Deskripsi</TableCell>
            <TableCell>Unit</TableCell>
            <TableCell>Uang Pertanggungan</TableCell>
          </TableHeader>
          <TableBody textAlign={"center"} style={styles.textTable}>
            <DataTableCell getContent={(r) => r.description} />
            <DataTableCell getContent={(r) => r.unit} />
            <DataTableCell getContent={(r) => r.nominal} />
          </TableBody>
        </Table>

        <Text style={styles.gap20}></Text>

        <Text style={styles.textBold}>
          Perubahan/Penambahan klausul sebagai bagian dalam Sertifikat :
        </Text>

        <Text style={styles.gap10}></Text>

        <Text style={[styles.text, styles.ml20]}>
          - Objek pertanggungan yang dibeli haruslah barang baru dan bergaransi
          resmi pabrik;
        </Text>
        <Text style={[styles.text, styles.ml20]}>
          - Kondisi mesin Objek pertanggungan masih dalam kondisi segel;
        </Text>
        <Text style={[styles.text, styles.ml20]}>
          - Kondisi mesin Objek pertanggungan tidak boleh dibongkar;
        </Text>
        <Text style={[styles.text, styles.ml20]}>
          - Objek pertanggungan tidak dapat pindah tangankan/ perubahan
          kepemilikan objek pertanggungan
        </Text>

        <Text style={styles.gap20}></Text>
        <Text style={styles.gap20}></Text>

        <Text style={styles.textRight}>
          Jakarta,{" "}
          {moment(data["Periode Mulai"]).locale("id").format("Do MMMM YYYY")}
        </Text>

        <Text style={styles.gap20}></Text>
        <Text style={styles.gap20}></Text>
        <Text style={styles.gap10}></Text>

        <Text style={styles.textRight}>DOSS Protection</Text>
      </View>
    </Page>

    <Page size="A4" style={styles.page}>
      <View style={styles.sectionCenter}>
        <Text style={styles.textBold}>1. Jaminan</Text>

        <Text style={styles.gap10}></Text>

        <Text style={[styles.text, styles.ml20]}>
          a) Memberikan perpanjangan garansi setelah garansi pabrik berakhir.
        </Text>
        <Text style={[styles.text, styles.ml20]}>
          b) Memberikan penggantian biaya perbaikan atau penggantian suku cadang
          atas kerusakan barang elektronik yang dipertanggungkan sesuai dengan
          Garansi Pabrik dan tidak lebih dari harga pertanggungan, yang mana
          kerusakan tersebut terjadi secara tiba-tiba, datang dari luar diri
          Tertanggung, tidak dikehendaki dan di dalamnya tidak terdapat faktor
          kesengajaan.
        </Text>

        <Text style={styles.gap20}></Text>

        <Text style={styles.textBold}>2. Besarnya Penggantian</Text>

        <Text style={styles.gap10}></Text>

        <Text style={[styles.text, styles.ml20]}>
          a) Biaya perbaikan dan penggantian suku cadang terhadap barang
          elektronik yang mengalami kerusakan sesuai dengan Jaminan Garansi
          Pabrik setelah dikurangi Resiko Sendiri sebesar 20% dari nilai klaim
          yang disetujui.
        </Text>
        <Text style={[styles.text, styles.ml20]}>
          b) Penggantian seharga Uang Pertanggungan untuk kerusakan pada barang
          elektronik yang tidak dapat diperbaiki maksimal sesuai dengan harga
          pasar unit pada saat kejadiaan dikurangi Resiko Sendiri sebesar 20%
          dari nilai klaim yang disetujui. Besarnya ganti rugi dalam satu
          kejadian klaim (any one accident) dan secara keseluruhan (in
          aggregate) untuk setiap satu unit barang elektronik selama
          berlangsungnya Periode Asuransi tidaklah melebihi Harga Pertanggungan.
        </Text>

        <Text style={styles.gap20}></Text>

        <Text style={styles.header}>PERSYARATAN & KONDISI UMUM</Text>

        <Text style={styles.gap20}></Text>

        <Text style={styles.text}>
          Polis ini beserta Ikhtisar dan Formulir Aplikasi Asuransinya dianggap
          sebagai satu kesatuan kontrak, dan ungkapan “Polis ini” dimanapun ia
          digunakan di dalam kontrak ini harus dibaca sebagai bagian yang tidak
          terpisahkan dari Polis, Ikhtisar, dan Formulir Aplikasi Asuransinya.
          Setiap kata atau ungkapan yang memiliki arti khusus yang terlekat di
          bagian manapun pada Polis ini mengandung arti yang sama dimanapun kata
          atau ungkapan tersebut muncul pada Ikhtisar atau Formulir Aplikasi
          Asuransi.
        </Text>

        <Text style={styles.gap10}></Text>

        <Text style={styles.textBold}>1. Polis Tidak Berlaku</Text>

        <Text style={styles.gap10}></Text>

        <Text style={styles.text}>
          Polis ini dapat menjadi tidak berlaku sehubungan dengan terjadinya
          salah deskripsi, salah penyajian, atau tidak diungkapkannya suatu
          keterangan material oleh Tertanggung.
        </Text>

        <Text style={styles.gap10}></Text>

        <Text style={styles.textBold}>2. Perubahan</Text>

        <Text style={styles.gap10}></Text>

        <Text style={styles.text}>
          Polis ini menjadi tidak berlaku apabila setelah berlakunya
          pertanggungan Barang Elektronik yang diasuransikan mengalami
          perubahan:
        </Text>

        <Text style={[styles.text, styles.ml20]}>
          a) yang menyebabkan risiko kerugian, kehancuran, atau kerusakan
          meningkat;
        </Text>
        <Text style={[styles.text, styles.ml20]}>
          b) Perubahan kepemilikan obyek pertanggungan sehingga menyebabkan
          berakhirnya kepentingan Tertanggung atasnya. Kecuali jika perubahan
          tersebut diakui dan disetuji oleh Penanggung secara tertulis.
        </Text>

        <Text style={styles.gap10}></Text>

        <Text style={styles.textBold}>3. Pemberitahuan kepada Penanggung</Text>

        <Text style={styles.gap10}></Text>

        <Text style={styles.text}>
          Setiap pemberitahuan yang diberikan atau komunikasi yang dibuat di
          bawah Polis ini haruslah disampaikan secara tertulis ke Kantor Pusat
          atau Kantor Cabang atau Perwakilan Penanggung selambat-lambatnya 7
          (tujuh) hari kerja sejak pemberitahuan atau komunikasi dilakukan.
        </Text>

        <Text style={styles.gap10}></Text>

        <Text style={styles.textBold}>4. Pencegahan yang Wajar</Text>

        <Text style={styles.gap10}></Text>

        <Text style={styles.text}>
          Tertanggung harus melakukan segala tindakan pencegahan yang wajar
          untuk menghalangi terjadinya kehancuran atau kerusakan dan
          meminimalkan bertambah besarnya kehancuran atau kerusakan atas Barang
          Elektronik yang diasuransikan di bawah Polis ini.
        </Text>

        <Text style={styles.gap10}></Text>

        <Text style={styles.textBold}>Periode Asuransi</Text>

        <Text style={styles.gap10}></Text>

        <Text style={styles.text}>
          Periode asuransi adalah {data["Masa Garansi"]} tahun setelah masa
          Garansi Pabrik berakhir. Dimulai dan berakhirnya periode asuransi ini
          adalah pada pukul 12 (dua belas) siang, pada kedua tanggal yang
          tercantum dalam Ikhtisar.
        </Text>
      </View>
    </Page>

    <Page size="A4" style={styles.page}>
      <View style={styles.sectionCenter}>
        <Text style={styles.textBold}>Berakhirnya Pertanggungan</Text>

        <Text style={styles.gap10}></Text>

        <Text style={styles.text}>
          Pertanggungan secara otomatis efektif berakhir bila :
        </Text>

        <Text style={[styles.text, styles.ml20]}>
          a) Pertanggungan berakhir dengan sendirinya sesudah berakhirnya
          periode asuransi yang tercantum dalam sertifikat polis
        </Text>
        <Text style={[styles.text, styles.ml20]}>
          b) Pertanggungan berakhir dengan sendirinya apabila Barang Elektronik
          dan/atau kepentingan yang diasuransikan di bawah polis berpindah
          tangan lebih ke pihak lain.
        </Text>
      </View>
    </Page>
  </Document>
);

export default MyDocument;
