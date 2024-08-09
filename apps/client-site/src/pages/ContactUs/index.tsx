import { MailOpen, MapPin, Smartphone } from "lucide-react";
import { Footer } from "../../components/custom/Footer";
import { Navbar } from "../../components/custom/Navbar";
import { useMutation } from "@tanstack/react-query";
import { makeEnquiry } from "../../api/data/mutations";
import { useState } from "react";
import Dialog from "../../components/custom/Dialog";

export default function ContactUs() {
    const [openDialog, setOpenDialog ] = useState(false);
    const [message, setMessage] = useState('')
    const [formData, setFormData] = useState({
        firstname:'',
        lastname:'',
        email:"",
        phone:'',
        message:'',
    })
    const { mutateAsync, isPending } = useMutation({
        mutationFn:(data) => makeEnquiry(data)
    })
    const submit = async() => {
        try {
            const response = await mutateAsync(formData);
            console.log(response)
            if(response?.data?.return_code == "004"){
                setMessage(response?.data?.response_message)
                setOpenDialog(true);
            }
        } catch (error) {
            
        }
    }
    return (
        <main className='flex flex-col items-start m-auto min-h-screen w-full bg-gray-100'>
            <Navbar />

            {/* Image */}
            <section className='w-full h-[65vh] bg-[url("/assets/contactus.png")] bg-center bg-cover bg-no-repeat relative'>

            </section>

            {/* Contact Us */}
            <section className="w-full flex flex-col md:flex-row items-center gap-4">
                <div className='w-full md:w-fit p-10  flex flex-wrap md:flex-col items-center gap-5 justify-center'>

                    <div className='w-full h-32 p-10  bg-white flex flex-row items-center '>
                        <div className='h-16 w-16 rounded-full bg-orange-300 flex justify-center items-center mr-5'>
                            <Smartphone className="text-orange-700 size-10" />
                        </div>

                        <div>
                            <h3 className='text-2xl font-semibold'>
                                Phone Number
                            </h3>
                            <p className="text-gray-700 text-sm font-semibold">
                                +233 53 509 7486
                            </p>
                        </div>

                    </div>

                    <div className='w-full h-32 p-10  bg-white flex flex-row items-center '>
                        <div className='h-16 w-16 rounded-full bg-orange-300 flex justify-center items-center mr-5'>
                            <MapPin className="text-orange-700 size-10" />
                        </div>

                        <div>
                            <h3 className='text-2xl font-semibold'>
                                Address
                            </h3>
                            <p className="text-gray-700 text-sm font-semibold">
                                Adjecent Sunu Assurance 61
                                <br />
                                George Bush Hwy GA-157-8719
                            </p>
                        </div>
                    </div>

                    <div className='w-full h-32 p-10  bg-white flex flex-row items-center '>
                        <div className='h-16 w-16 rounded-full bg-orange-300 flex justify-center items-center mr-5'>
                            <MailOpen className="text-orange-700 size-10" />
                        </div>

                        <div>
                            <h3 className='text-2xl font-semibold'>
                                Email Address
                            </h3>
                            <p className="text-gray-700 text-sm font-semibold">
                                jingdoli@gmail.com
                            </p>
                        </div>

                    </div>
                </div>
                <div className='w-full bg-white px-10'>
                    <div className='w-full gap-x-72 gap-y-6 py-10 tracking-wider'>
                        <h3 className='text-2xl font-semibold uppercase mb-5'>
                            Send a message
                        </h3>

                        <p className="text-gray-700 text-sm">
                            If you got any questions don't hesitate to send us a message
                        </p>
                        <div className='w-full grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6 py-10 tracking-wider'>
                            <input id='text' placeholder='First Name' value={formData.firstname}
                             className=' h-16 text-gray-700 bg-white shadow-md border-black rounded-lg px-5' 
                             onChange={e => setFormData((prev) => ({...prev, firstname:e.target.value}))}
                            />
                            <input id='text' placeholder='Last Name' value={formData.lastname}
                             className=' h-16 text-gray-700 bg-white shadow-md border-black rounded-lg px-5' 
                             onChange={e => setFormData((prev) => ({...prev, lastname:e.target.value}))}
                            />
                            <input id='email' placeholder='Email' value={formData.email}
                             className='h-16 text-gray-700 bg-white shadow-md border-black rounded-lg px-5' 
                             onChange={e => setFormData((prev) => ({...prev, email:e.target.value}))}
                            />
                            <input id='text' placeholder='Phone Number' value={formData.phone}
                             className='h-16 text-gray-700 bg-white shadow-md border-black rounded-lg px-5' 
                             onChange={e => setFormData((prev) => ({...prev, phone:e.target.value}))}
                            />
                        </div>

                        <div className='w-full tracking-widest'>
                            <textarea id='message' placeholder='Message' value={formData.message}
                             className='w-full h-40  text-gray-700 bg-white shadow-md border-black rounded-lg px-5 ' 
                             onChange={e => setFormData((prev) => ({...prev, message:e.target.value}))}
                            />
                            <button type="submit"
                             disabled={isPending}
                             className={`w-32 text-xl h-12 bg-orange-600 text-white rounded hover:bg-orange-600 mx-auto uppercase tracking-wider disabled:bg-orange-300 disabled:cursor-not-allowed ${isPending && 'animate-pulse'}`}
                             onClick={submit}
                            >
                                Send
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Google Maps */}
            <section className="w-full flex flex-col items-center justify-center">
                <div className="w-full py-10 flex items-center justify-center flex-col">
                    <h3 className='text-4xl text-gray-800 font-semibold mb-5 '>
                        Find Us On Google Maps
                    </h3>

                    <p className="text-gray-500 font-semibold text-md ">
                        Discover our location: Long Lian Industry and Trade on Google Maps - Visit us today!
                    </p>
                </div>
                <div className="w-full max-w-4xl aspect-w-16 aspect-h-10 py-10">
                    <iframe
                        className="w-full h-full"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345094856!2d144.95373531535066!3d-37.81720997975195!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf0727e4f6f8917e5!2sFederation%20Square!5e0!3m2!1sen!2sau!4v1615428945422!5m2!1sen!2sau"
                        allowFullScreen={false}
                        loading="lazy">
                    </iframe>
                </div>
            </section>

            <Footer />
            <Dialog open={openDialog} onClose={() => setOpenDialog(false)}>
                {message}
            </Dialog>
        </main>
    )
}
