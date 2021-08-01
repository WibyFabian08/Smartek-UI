import React from "react";
import Card from "../../elements/Card";

import award from "../../assets/icons/award.svg";
import rating from "../../assets/icons/rating.svg";
import transparan from "../../assets/icons/transparan.svg";

const WorkWithUs = () => {
  return (
    <section className="mt-20 md:mt-32 mb-14 md:mb-28">
      <h2 className="text-3xl mb-5 text-center">WHY WORK WITH US?</h2>
      <div className="flex flex-wrap justify-center items-center">
        <Card
          title="Kualitas"
          icon={award}
          desc="Lebih dari 5 tahun, Smartek membantu mendigitalisasi berbagai bisnis klien kami dengan kualitas terbaik untuk setiap klien, di setiap proyek"
        ></Card>
        <Card
          title="Hubungan baik dengan klien"
          icon={rating}
          desc="Dengan integritas sebagai kunci utama, kami memperlakukan klien kami sebagai partner yang bertumbuh bersama"
        ></Card>
        <Card
          title="Transparansi"
          icon={transparan}
          desc="Untuk setiap progress yang berjalan, akan diadakan report berkala"
        ></Card>
      </div>
    </section>
  );
};

export default WorkWithUs;
