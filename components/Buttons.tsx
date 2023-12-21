import { FaInstagram } from 'react-icons/fa'
import { FaLinkedin } from 'react-icons/fa6'
import { FaGithub } from 'react-icons/fa'
import { MdAlternateEmail } from 'react-icons/md'

export default function Buttons() {
    return (
        <div className='flex justify-center p-8'>
            <button className='flex gap-4'>
                <FaInstagram size={30} />
                <FaLinkedin size={30} />
                <FaGithub size={30} />
                <MdAlternateEmail size={30} />
            </button>
        </div>

    )
}