import React, { useEffect, useState } from "react";
import { ListGroup } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-regular-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import SingleChat from "./SingleChat";
import { getAllConversations } from "../ChatSlice";
import "./Chat.scss";
import { useNavigate, useParams } from "react-router-dom";
import MessagePopup from "./MessagePopup";
import { socket } from "../../../App";

const ListChat = ({ setIsOpenSetting }) => {
  console.log("render list again");
  const [isShowPopup, setIsShowPopup] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const conversations = useSelector((state) => state.chat.conversations);
  const currentUser = useSelector((state) => state.auth.current);
  const params = useParams();
  const [id, setId] = useState("");

  const handleClick = (id) => {
    // socket.emit('disconnect', params.id);
    // socket.emit('leaveRoom', params['*']);
    setIsOpenSetting(false);
    navigate(`${id}`);
  };

  useEffect(() => {
    socket.on("recieveNotice", (member) => {
      dispatch(getAllConversations())
        .unwrap()
        .then((resultValue) => {})
        .catch((rejectedValue) => {});
    });
    return () => {
      // socket.off('reieveNotice');
      console.log("client Off");
    };
  }, [socket]);

  useEffect(() => {
    dispatch(getAllConversations())
      .unwrap()
      .then((resultValue) => {})
      .catch((rejectedValue) => {});
  }, []);

  return (
    <div className="leftPanel">
      <div className="leftPanel__title">
        <h6>{currentUser.name}</h6>
        <FontAwesomeIcon
          icon={faPenToSquare}
          cursor="pointer"
          size="lg"
          onClick={() => setIsShowPopup(true)}
        />
      </div>
      <div className="leftPanel__listChat">
        {conversations.map((conversation) => {
          return (
            <SingleChat
              conversation={conversation}
              handleClick={handleClick}
              setId={setId}
              key={conversation._id}
              currentUser={currentUser}
            />
          );
        })}
      </div>
      {isShowPopup && <MessagePopup setIsShowPopup={setIsShowPopup} />}
    </div>
  );
};

export default ListChat;
