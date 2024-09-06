import '@/assets/styles/globals.css'
export const metadata = {
    title: "Property Pluse",
    keywords: "rental, property, real estate",
    description: "Find the perfect rental property",
};

const Mainlayout = ({children}) => {
    return (
      <html>
        <body>
          <main>{children}</main>
        </body>
      </html>
    );
};

export default Mainlayout;
