import Image from "next/image";
import Layout from "../components/layout";
import styles from '../styles/nosotros.module.css'

export default function Nosotros() {
  return (
   <Layout
    title={'Nosotros'}
    description={"Sobre nosotros, GuitarLA, tienda de musica"}
   >
        <main className="contenedor">
          <h1 className="heading">Nosotros</h1>

          <div className={styles.contenido}>
            <Image src="/img/nosotros.jpg" width={1000} height={800} alt="Imagen sobre nosotros"/>
            <div>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eleifend et ex venenatis fermentum. Nullam tempus, nisi in laoreet malesuada, nisi nunc porta dui, et pulvinar augue nulla a ligula. Nam euismod ultricies urna non consequat.</p>
              <p>Integer nisl arcu, eleifend ac erat vitae, facilisis malesuada eros. Quisque vitae eleifend lacus. Sed ut maximus elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ipsum ante, accumsan non pretium sed, mattis ut tellus. </p>
            </div>
          </div>
        </main>
    </Layout>
  )
}
