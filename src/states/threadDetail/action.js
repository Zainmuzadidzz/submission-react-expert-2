/* eslint-disable no-alert */
import { hideLoading, showLoading } from 'react-redux-loading-bar';
import api from '../../utils/api';

const ActionType = {
  RECEIVE_THREAD_DETAIL: 'RECEIVE_THREAD_DETAIL',
  UP_VOTE_THREAD_DETAIL: 'UP_VOTE_THREAD_DETAIL',
  DOWN_VOTE_THREAD_DETAIL: 'DOWN_VOTE_THREAD_DETAIL',
  NEUTRALIZE_VOTE_THREAD_DETAIL: 'NEUTRALIZE_VOTE_THREAD_DETAIL',
  RECEIVE_COMMENTS: 'RECEIVE_COMMENTS',
  ADD_COMMENT: 'ADD_COMMENT',
  UP_VOTE_COMMENT_DETAIL: 'UP_VOTE_COMMENT_DETAIL',
  DOWN_VOTE_COMMENT_DETAIL: 'DOWN_VOTE_COMMENT_DETAIL',
  NEUTRALIZE_VOTE_COMMENT_DETAIL: 'NEUTRALIZE_VOTE_COMMENT_DETAIL',
};

function receiveThreadDetailActionCreator(threadDetail) {
  return {
    type: ActionType.RECEIVE_THREAD_DETAIL,
    payload: {
      threadDetail,
    },
  };
}

function asyncReceiveThreadDetail(threadId) {
  return async (dispatch) => {
    dispatch(showLoading());
    try {
      const threadDetail = await api.getThreadDetail(threadId);
      dispatch(receiveThreadDetailActionCreator(threadDetail));
    } catch (error) {
      alert(error.message);
    }
    dispatch(hideLoading());
  };
}

function upVoteThreadDetailActionCreator(userId) {
  return {
    type: ActionType.UP_VOTE_THREAD_DETAIL,
    payload: {
      userId,
    },
  };
}

function downVoteThreadDetailActionCreator(userId) {
  return {
    type: ActionType.DOWN_VOTE_THREAD_DETAIL,
    payload: {
      userId,
    },
  };
}

function neutralizeThreadDetailVoteActionCreator(userId) {
  return {
    type: ActionType.NEUTRALIZE_VOTE_THREAD_DETAIL,
    payload: {
      userId,
    },
  };
}

function asyncUpVoteThreadDetail() {
  return async (dispatch, getState) => {
    dispatch(showLoading());
    const { threadDetail, authUser } = getState();
    dispatch(upVoteThreadDetailActionCreator(authUser.id));
    try {
      await api.upVoteThread(threadDetail.id);
    } catch (error) {
      alert(error.message);
    }
    dispatch(hideLoading());
  };
}

function asyncDownVoteThreadDetail() {
  return async (dispatch, getState) => {
    dispatch(showLoading());
    const { threadDetail, authUser } = getState();
    dispatch(downVoteThreadDetailActionCreator(authUser.id));
    try {
      await api.downVoteThread(threadDetail.id);
    } catch (error) {
      alert(error.message);
    }
    dispatch(hideLoading());
  };
}

function asyncNeutralizeVoteThreadDetail() {
  return async (dispatch, getState) => {
    dispatch(showLoading());
    const { threadDetail, authUser } = getState();
    dispatch(neutralizeThreadDetailVoteActionCreator(authUser.id));
    try {
      await api.neutralizeThreadVote(threadDetail.id);
    } catch (error) {
      alert(error.message);
    }
    dispatch(hideLoading());
  };
}

function addCommentActionCreator(comment) {
  return {
    type: ActionType.ADD_COMMENT,
    payload: {
      comment,
    },
  };
}

function upVoteCommentDetailActionCreator(userId, commentId) {
  return {
    type: ActionType.UP_VOTE_COMMENT_DETAIL,
    payload: {
      userId,
      commentId,
    },
  };
}

function downVoteCommentDetailActionCreator(userId, commentId) {
  return {
    type: ActionType.DOWN_VOTE_COMMENT_DETAIL,
    payload: {
      userId,
      commentId,
    },
  };
}

function neutralizeCommentDetailVoteActionCreator(userId, commentId) {
  return {
    type: ActionType.NEUTRALIZE_VOTE_COMMENT_DETAIL,
    payload: {
      userId,
      commentId,
    },
  };
}

function asyncAddComment({ content }) {
  return async (dispatch, getState) => {
    const { threadDetail } = getState();
    try {
      const comment = await api.createComment({
        content,
        threadId: threadDetail.id,
      });
      dispatch(addCommentActionCreator(comment));
    } catch (error) {
      alert(error.message);
    }
  };
}

function asyncUpVoteCommentDetail(commentId) {
  return async (dispatch, getState) => {
    dispatch(showLoading());
    const { threadDetail, authUser } = getState();
    dispatch(upVoteCommentDetailActionCreator(authUser.id, commentId));
    try {
      await api.upVoteComment(threadDetail.id, commentId);
    } catch (error) {
      alert(error.message);
    }
    dispatch(hideLoading());
  };
}

function asyncDownVoteCommentDetail(commentId) {
  return async (dispatch, getState) => {
    dispatch(showLoading());
    const { threadDetail, authUser } = getState();
    dispatch(downVoteCommentDetailActionCreator(authUser.id, commentId));
    try {
      await api.downVoteComment(threadDetail.id, commentId);
    } catch (error) {
      alert(error.message);
    }
    dispatch(hideLoading());
  };
}

function asyncNeutralizeVoteCommentDetail(commentId) {
  return async (dispatch, getState) => {
    dispatch(showLoading());
    const { threadDetail, authUser } = getState();
    dispatch(neutralizeCommentDetailVoteActionCreator(authUser.id, commentId));
    try {
      await api.neutralizeThreadVote(threadDetail.id, commentId);
    } catch (error) {
      alert(error.message);
    }
    dispatch(hideLoading());
  };
}

export {
  ActionType,
  receiveThreadDetailActionCreator,
  asyncReceiveThreadDetail,
  asyncUpVoteThreadDetail,
  asyncDownVoteThreadDetail,
  asyncNeutralizeVoteThreadDetail,
  asyncAddComment,
  asyncUpVoteCommentDetail,
  asyncDownVoteCommentDetail,
  asyncNeutralizeVoteCommentDetail,
};
