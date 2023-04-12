import styles from "../styles/Home.module.css";
import InstructionsComponent from "../components/InstructionsComponent";
import NftGallery from "../components/nftGallery.jsx"
import NftCollectionSalesDisplay from "../components/nftCollectionSalesDisplay.jsx"

export default function Home() {
  return (
    <div>
      <main className={styles.main} >
        <InstructionsComponent></InstructionsComponent>
        <NftGallery></NftGallery>
        <nftCollectionSalesDisplay></nftCollectionSalesDisplay>
      </main>
    </div>
  );
}
