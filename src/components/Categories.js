import { useEffect, useState } from "react";
import { collection, getDocs, getFirestore } from "firebase/firestore";
import { Link } from "react-router-dom";

export default function Categories() {
  const [category, setCategory] = useState([]);

  useEffect(() => {
    const db = getFirestore();
    const categoriesCollection = collection(db, "categorias");

    getDocs(categoriesCollection).then((snapshot) => {
      setCategory(snapshot.docs.map((doc) => doc.data().name));
    });
  }, []);

  return (
    <>
      {category.map((el) => (
        <li className="nav-item" key={el}>
          <Link to={"/category/" + el} className="nav-link">
            {el}
          </Link>
        </li>
      ))}
    </>
  );
}
