import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Col, Row } from "react-bootstrap";
import IMAGES from "../../../assets/images/imageStore";
import { faEllipsis } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import { ShowReportModal } from "../homeSlice";
import ReportModal from "./reportModal";
import { addActiveId } from "../../user/profileSlice";
import { useNavigate } from "react-router-dom";

const PostHeader = ({ postId, postUser }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  //show report modal
  const showModal = (id) => {
    console.log(id);
    const action = ShowReportModal();
    dispatch(action);
  };

  const hanldeShowProfile = (id) => {
    const action = addActiveId(id);
    dispatch(action);
    navigate("/account");
  };

  return (
    <Row>
      <Col md={1} onClick={() => hanldeShowProfile(postUser._id)}>
        <img src={postUser?.avatar} alt="" />
      </Col>
      <Col md={10} onClick={() => hanldeShowProfile(postUser._id)}>
        <h6>{postUser?.name}</h6>
      </Col>
      <Col md={1}>
        <FontAwesomeIcon
          icon={faEllipsis}
          id="more"
          onClick={() => showModal(postId)}
        />
      </Col>
    </Row>
  );
};

export default PostHeader;
