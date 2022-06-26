import Head from "next/dist/shared/lib/head"
import { Box } from '@chakra-ui/react'
import Navbar from "./Navbar"

const Layout = ({children}) => {
    return(
         <>
    <Head>
        <title>Property App</title>
    </Head>
    <Box maxWidth="1280px" m="auto">
            <header>
                <Navbar />
            </header>
            <main>
                {children}
            </main>
            <footer>
                Footer
            </footer>
    </Box>
    
  </>
    )
 
}

export default Layout