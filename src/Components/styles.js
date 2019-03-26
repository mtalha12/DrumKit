import BackGroundImage from "../Sounds/Image.jpg";

const styles = {
    // html : {
    //     fontSize: '10px',
    //     background:url(http://i.imgur.com/b9r5sEL.jpg) bottom center,
    //     backgroundSize: cover,
    //   },
    //   body,html: {
    //     margin: '0',
    //     padding: '0',
    //     fontFamily: sans-serif,
    //   },
      
      keys : {
        display: 'flex',
        flex: '1',
        minHeight: '100vh',
        alignItems: 'center',
        justifyContent: 'center',
        //backgroundColor : 'red',
        backgroundSize:"cover",
        backgroundImage: "url("+BackGroundImage+")",
      },
      

      
      playing : {
        transform: 'scale(1.1)',
        borderColor:'#ffc600',
        boxShadow: '0 0 10px #ffc600',
      },
      
      kbd : {
        display: 'block',
        fontSize: '40px',
        //color : 'black',
      },
      
      sound : {
        fontSize: '1.2rem',
        textTransform: 'uppercase',
        letterSpacing: '1px',
        color: '#ffc600',
      },
}
export default styles