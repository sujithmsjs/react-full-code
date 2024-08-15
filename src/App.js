import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "popper.js";
import Header from "./my-ui/Header";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./pages/Main";
import { Children } from "react";
import CartXPress from "./applications/cart-xpress/CartXPress";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Todos from "./pages/Todos";
import Signup from "./pages/Signup";
import Login, { loginAction } from "./pages/Login";
import Logout from "./pages/Logout";
import Store from "./pages/Store";
import { Provider } from "react-redux";
import { store } from "./store/store"
import { TodoApp } from "./applications/todo-manager/TodoApp";
import Prods from "./applications/prods/Prods";
import { WordsHuntApp } from "./applications/words-hunt/WordsHuntApp";
import QuotesHunt from "./applications/quotes-hunt/QuotesHunt";
import QuotesList from "./applications/quotes-hunt/QuotesList";
import ShowTags from "./applications/quotes-hunt/ShowTags";
import AddTag from "./applications/quotes-hunt/AddTag";
import { ToastContainer } from "react-toastify";
import LocationSelector from "./applications/samples/LocationSelector";
import LocationSelector2 from "./applications/samples/LocationSelector2";
import { GridPrac1 } from "./applications/samples/GridPrac1";
import { AddEmployee } from "./applications/employees/AddEmployee";
import QuotesNavBar2 from './applications/quotes-hunt/QuotesNavBar2'
import LocationSelector3 from "./applications/samples/LocationSelector3";
import { ReadJSONData } from "./applications/samples/ReadJSONData";
import { Modelv3 } from "./applications/samples/Modelv3";
import Modelv2 from "./applications/samples/Modelv2";
import { ConfirmDialogProvider } from "./context/ConfirmDialogContext";
import OffcanvasDemo1 from "./applications/samples/OffcanvasDemo1";
import { Modelv5 } from "./applications/samples/role-curd-v1/Modelv5";
import { ImageUploadDemo } from "./applications/samples/ImageUploadDemo";
import DownloadAsJSON from "./applications/samples/DownloadAsJSON";
import { AddQuote } from "./applications/quotes-hunt/AddQuote";
import Proverbs from "./applications/quotes-hunt/Proverbs";
import { SearchBarTest } from "./applications/quotes-hunt/SearchBarTest";
import QuotesListV2 from "./applications/quotes-hunt/QuotesListV2";
import Metrics from "./applications/quotes-hunt/Metrics";
import QuotesListV3 from "./applications/quotes-hunt/QuotesListV3";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: "profile",
        element: <Profile />
      },
      {
        path: "todos",
        element: <Todos />
      },
      {
        path: "signup",
        element: <Signup />
      },
      {
        path: "login",
        element: <Login />,
        action: loginAction
      },
      {
        path: 'cart',
        element: <CartXPress />
      },
      {
        path: 'todo',
        element: <TodoApp />
      },
      {
        path: 'prods',
        element: <Prods />
      },
      {
        path: "words",
        element: <WordsHuntApp />
      },
      {
        path: "logout",
        element: <Logout />
      },
      {
        path: "store",
        element: <Store />
      }
    ],


  },
  {
    path: '/quotes',
    element: <QuotesNavBar2 />,
    children: [
      {
        index: true,
        element: <QuotesList />,
      },
      {
        path: 'home',
        element: <QuotesListV2 />,
      },
      {
        path: 'add',
        element: <AddQuote />
      },
      {
        path: 'add/:quoteId',
        element: <AddQuote />
      },
      {
        path: 'tags',
        element: <ShowTags />
      },
      {
        path: 'proverbs',
        element: <Proverbs />
      },
      {
        path: 'add-tag',
        element: <AddTag />
      },
      {
        path: 'search-test',
        element: <SearchBarTest />
      },
      {
        path: 'metrics',
        element: <Metrics />
      },
      {
        path: 'listv3',
        element: <QuotesListV3 />
      },
    ]
  },
  {
    path: '/sample',
    children: [
      {
        path: 'location',
        element: <LocationSelector />

      },
      {
        path: 'location2',
        element: <LocationSelector2 />

      },
      {
        path: 'location3',
        element: <LocationSelector3 />

      },
      {
        path: 'modelv1',
        element: <ReadJSONData />

      },
      {
        path: 'imgupload',
        element: <ImageUploadDemo />

      },
      {
        path: 'dljson',
        element: <DownloadAsJSON />

      },
      {
        path: 'modelv2',
        element: <Modelv2 />

      },
      {
        path: 'offcanvas1',
        element: <OffcanvasDemo1 />

      },
      // {
      //   path: 'offcanvas2',
      //   element: <OffcanvasDemo2 />

      // },
      // {
      //   path: 'offcanvas3',
      //   element: <OffcanvasDemo3 />

      // },
      {
        path: 'modelv3',
        element: <Modelv3 />

      },
      {
        path: 'modelv5',
        element: <Modelv5 />

      },
      {
        path: 'grid1',
        element: <GridPrac1 />
      },


    ]
  },

  {
    path: '/employees',
    children: [
      {
        index: true,
        element: <AddEmployee />

      }
    ]
  }
])



export default function App() {
  return (
    <>

      <Provider store={store}>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
        <ToastContainer />
        <ConfirmDialogProvider>

          <RouterProvider router={router}></RouterProvider>

        </ConfirmDialogProvider>
      </Provider>


    </>
  );
}
