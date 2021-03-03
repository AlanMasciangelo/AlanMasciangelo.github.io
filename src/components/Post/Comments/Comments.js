// @flow strict
import React, { useEffect } from 'react';
import ReactDisqusComments from 'react-disqus-comments';
import { useSiteMetadata } from '../../../hooks';

const Comments = ({ postSlug, postTitle }) => {
  useEffect(() => {
    let script = document.createElement("script");
    let anchor = document.getElementById("inject-comments-for-uterances");
    script.setAttribute("src", "https://utteranc.es/client.js");
    script.setAttribute("crossorigin","anonymous");
    script.setAttribute("async", true);
    script.setAttribute("repo", "AlanMasciangelo/AlanMasciangelo.github.io");
    script.setAttribute("issue-term", "pathname");
    script.setAttribute( "theme", "github-light");
    script.setAttribute( "label", "comment");
    anchor.appendChild(script);
  }, []);
  return (
      // <div id="inject-comments-for-uterances"><a href={`https://github.com/AlanMasciangelo/website/issues/new?title=${postSlug}`}>Leave a comment directly on GitHub</a></div>
      <div id="inject-comments-for-uterances"></div>
      
  );
};

export default Comments;
