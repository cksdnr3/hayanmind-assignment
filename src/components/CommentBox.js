import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const CommentBox = ({ comment }) => (
  <>
    <CommentBoxStyle>
      <div>
        <Title>Comment Id</Title>
        <span>{comment.id}</span>
      </div>
      <div>
        <Title>Email</Title>
        <span>{comment.email}</span>
      </div>
      <div className="comment">
        <Title>Comment</Title>
      </div>
      <p>{comment.body}</p>
    </CommentBoxStyle>
  </>
);

CommentBox.propTypes = {
  comment: PropTypes.shape({
    postId: PropTypes.number.isRequired,
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
  }).isRequired,
};

const CommentBoxStyle = styled.div`
  margin: 0 auto;
  width: 500px;
  height: auto;
  border-radius: 20px;
  border: 0.5px solid #CED4DA;
  box-sizing: border-box;
  background: #F8F9FA;
  padding: 20px;
  font-size: 16px;
  line-height: 21px;
  color: #212529;
  
  & .comment {
    margin-bottom: 2px;
  }

`;

const Title = styled.span`
  font-weight: 600;
  margin-right: 12px;
`;

export default CommentBox;
