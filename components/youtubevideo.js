import styles from './youtubevideo.module.scss'

const YouTubeVideo = ({ youtubeUrl }) => {
    const youtubeId = youtubeUrl.substring(youtubeUrl.length - 11)
    return <div className={styles.embed_container}>
        <iframe 
            width="560" 
            height="315" 
            src={`https://www.youtube.com/embed/${youtubeId}`}
            title="YouTube video player" 
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen>
        </iframe> 
    </div>
}
export default YouTubeVideo