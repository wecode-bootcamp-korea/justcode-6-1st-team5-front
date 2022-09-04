import './SnsIcons.scss';

export default function SnsIcons() {
  return (
    <div className="sns_icons">
      <img
        src="/Images/facebook.png"
        alt="facebook"
        className="icon"
        onClick={() =>
          window.open(
            'https://www.facebook.com/%EC%A0%80%EC%8A%A4%ED%8A%B8%EC%BD%94%EB%93%9C-109527878353580',
            '_blank'
          )
        }
      />
      <img
        src="/Images/instagram.png"
        alt="instagram"
        className="icon"
        onClick={() =>
          window.open('https://www.instagram.com/justcode_bootcamp/', '_blank')
        }
      />
      <img
        src="/Images/youtube.png"
        alt="youtube"
        className="icon"
        onClick={() =>
          window.open(
            'https://www.youtube.com/channel/UCc3lqKQ9Ydf2sQLR8n4pkaQ',
            '_blank'
          )
        }
      />
    </div>
  );
}
