import React,{useState} from 'react';
import { Modal, Button } from 'antd';
import useWindowDimensions from 'util/windowDimentions';

const FullScreenModel = ({
    children,
    buttonType,
    buttonTitle,
    title,
    onOKfunction,
    ...rest
  }) => {

    const { height } = useWindowDimensions();
    const [visible, setVisible] = useState(false);

    const handleOk = (e) => {
      setVisible(false);
    };

    const showModal = () => {
      setVisible(true);
    };

    const handleCancel = (e) => {
      setVisible(false);
    };

    return (
      <>
        <Button type={buttonType} onClick={showModal}>{buttonTitle}</Button>
        <Modal
            title={title}
            visible={visible}
            onOk={handleOk}
            onCancel={handleCancel}
            width="100%"
            maskStyle={{top:'0px'}}
            bodyStyle={{ padding: '25px 150px' ,background:'#eee', minHeight: `${height - 70}px`, paddingBottom: '80px'}}
            style={{top:'0px'}}
            className="amazon-tool-model"
            forceRender={true}
            {...rest}
        >
            {children}
        </Modal>
    </>
)};
export default FullScreenModel;