import Footer from "@/Components/Footer";
import Header from "@/Components/Header";
import { store } from "@/redux/store";
import "@/styles/globals.scss";
import { Provider } from "react-redux";

export default function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Header />
      <main className="main">
        <div className="container">
          <Component {...pageProps} />
        </div>
      </main>
      <Footer />
    </Provider>
  );
}
