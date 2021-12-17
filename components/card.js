import Image from 'next/image'
import Link from 'next/link'
import FeaturedImage from './featuredImage'

const Card = ({ title, featuredImage, slug }) => {
    return <div>
        {featuredImage && 
            <Link href={`/titles/${slug}`}>
            <a>
                <FeaturedImage data={featuredImage} />
            </a>
            </Link>
        }
    </div>
}
export default Card