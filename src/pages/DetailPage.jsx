/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import ThreadsDetail from '../components/ThreadsDetail';
import ThreadsCommentInput from '../components/ThreadsCommentInput';
import CommentsList from '../components/CommentsList';

import {
  asyncDownVoteThreadDetail,
  asyncNeutralizeVoteThreadDetail,
  asyncReceiveThreadDetail,
  asyncUpVoteThreadDetail,
  asyncAddComment,
  asyncDownVoteCommentDetail,
  asyncUpVoteCommentDetail,
  asyncNeutralizeVoteCommentDetail,
} from '../states/threadDetail/action';

function DetailPage() {
  const { threadId } = useParams();

  const authUser = useSelector((state) => state.authUser);
  const threadDetail = useSelector((state) => state.threadDetail);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncReceiveThreadDetail(threadId));
  }, [threadId, dispatch]);

  const onAddComment = (content) => {
    dispatch(asyncAddComment({ content }));
    dispatch(asyncReceiveThreadDetail(threadId));
  };

  const onUpVoteCommentDetail = (commentId) => {
    dispatch(asyncUpVoteCommentDetail(commentId));
  };

  const onDownVoteCommentDetail = (commentId) => {
    dispatch(asyncDownVoteCommentDetail(commentId));
  };

  const onNeutralizeVoteCommentDetail = (commentId) => {
    dispatch(asyncNeutralizeVoteCommentDetail(commentId));
  };

  const onUpVoteDetail = () => {
    dispatch(asyncUpVoteThreadDetail(threadId));
  };

  const onDownVoteDetail = () => {
    dispatch(asyncDownVoteThreadDetail(threadId));
  };

  const onNeutralizeVoteDetail = () => {
    dispatch(asyncNeutralizeVoteThreadDetail(threadId));
  };

  if (!threadDetail) {
    return null;
  }

  return (
    <main className="container">
      <ThreadsDetail
        {...threadDetail}
        authUser={authUser}
        upVoteDetail={onUpVoteDetail}
        downVoteDetail={onDownVoteDetail}
        neutralizeVoteDetail={onNeutralizeVoteDetail}
      />
      <ThreadsCommentInput {...threadDetail} addComment={onAddComment} />
      <CommentsList
        comments={threadDetail.comments}
        authUser={authUser || null}
        upVoteCommentDetail={onUpVoteCommentDetail}
        downVoteCommentDetail={onDownVoteCommentDetail}
        neutralizeVoteCommentDetail={onNeutralizeVoteCommentDetail}
      />
    </main>
  );
}

export default DetailPage;
