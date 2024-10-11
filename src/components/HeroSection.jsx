import profile from '../assets/profile.jpg'

function HeroSection() {
    return (
        <div>
            <div className="flex flex-wrap mt-5 lg:mt-10">
                <div className="w-full lg:w-1/2 flex flex-wrap">

                    <h1 className="text-4xl lg:text-6xl tracking-wider w-full self-end mb-5 text-center lg:text-left">Full-Stack Developer</h1>

                    <p className="text-xl lg:text-2xl text-justify ">By applying this, the text will display with a gradient effect from cyan to sky blue. You can adjust the text size with classes like text-5xl, and you can change the gradient colors as needed.</p>

                </div>

                <div className=" text-center w-full lg:w-1/2">
                    <img className="mt-5 lg:mt-0 w-4/5 lg:w-3/4 rounded-3xl mx-auto" src={profile} alt="profile" />
                </div>
            </div>
        </div>
    )
}

export default HeroSection