import { message } from "antd";

const showMessahe = (status, response) => {
    
    message.destroy();
    let config = {
        content:response,
        duration: 5,
        style: { padding:'120px', marginTop:'5%' }
    }

    if( status === 'success' ) {
        message.success(config);
        return;
    }
    message.error(config);
}
export default showMessahe;