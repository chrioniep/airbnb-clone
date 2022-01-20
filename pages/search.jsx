import Header from "../components/Header"
import Footer from '../components/Footer'
import InfoCard from '../components/infoCard'
import { useRouter } from "next/router"
import { format } from 'date-fns'

function Search({searchResults}) {

    console.log(searchResults)
    const router = useRouter()
    const { location, startDate, endDate, noOfGuests } = router.query
    const formattedEndDate = format(new Date(endDate), 'dd MMMM yy')
    const formattedStartDate = format(new Date(startDate), 'dd MMMM yy')
    const range = `${formattedStartDate} - ${formattedEndDate}`
    return (
        <div>
            <Header placeholder={`${location} | ${formattedStartDate} | ${formattedEndDate} | ${noOfGuests} Guests`}/>
             <main className="flex">
                <section className="flex-grow pt-14 px-6">
                    <p className="text-xs">300+ Stays - {range} - for {noOfGuests} guests</p>

                    <h1 className="text-3xl font-semibold mt-2 mb-3">Stays in { location }</h1>
                    <div className="hidden lg:inline-flex mb-5 space-x-3 text-gray-800 whitespace-nowrap">
                         <p className="button">Cancelation flexibility</p>
                         <p className="button">Type of Place</p>
                         <p className="button">Price</p>
                         <p className="button">Rooms and Beds</p>
                         <p className="button">More filters</p>
                    </div>

                    <div className="flex flex-col">
                    {searchResults.map(({img, location, title, description, star, price, total}) => (
                        <InfoCard 
                            img={img}
                            location={location}
                            title={title}
                            description={description}
                            star={star}
                            price={price}
                            total={total}
                            key={img}
                        />
                    ))}
                    </div>
                </section>
             </main>
            <Footer/>
        </div>
    )
}

export default Search

export async function getServerSideProps(){
    const searchResults = await fetch("https://links.papareact.com/isz")
    .then(res => res.json())
    
    return {
        props:{
            searchResults
        }
    }
}
