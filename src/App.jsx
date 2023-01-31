import { useState } from "react";
import * as scroll from "react-scroll";

export default function App() {
  const [tutorialClassName, setTutorialClassName] = useState("");
  const [codeClassName, setCodeClassName] = useState("");
  const [memberClassName, setMemberClassName] = useState("");
  const [downloadClassName, setDownloadClassName] = useState(
    "button is-large is-link is-rounded"
  );

  const clickButton = () => {
    setDownloadClassName(
      "button is-large is-link is-rounded is-loading is-disable"
    );
    setTimeout(() => {
      setDownloadClassName("button is-large is-link is-rounded");
    }, 2500);
  };
  const returnTop = () => {
    scroll.animateScroll.scrollToTop({ smooth: true });
  };
  const scrollElement = (element) => {
    scroll.scroller.scrollTo(element, { smooth: true });
  };

  return (
    <>
      <section className="hero is-info is-small">
        <div className="hero-body">
          <div className="container has-text-centered">
            <h1 className="title">History Tree</h1>
            <p className="subtitle">自分の履歴がどうなってるか見てみよう</p>
          </div>
        </div>
        <div className="hero-foot">
          <nav className="tabs is-boxed is-fullwidth">
            <div className="container">
              <ul>
                <li
                  onMouseEnter={() => setTutorialClassName("is-active")}
                  onMouseLeave={() => setTutorialClassName("")}
                  className={tutorialClassName}
                >
                  <a
                    onClick={() => {
                      scrollElement("tutorial");
                    }}
                  >
                    使用方法
                  </a>
                </li>
                <li
                  onMouseEnter={() => setCodeClassName("is-active")}
                  onMouseLeave={() => setCodeClassName("")}
                  className={codeClassName}
                >
                  <a
                    onClick={() => {
                      scrollElement("program");
                    }}
                  >
                    ソースコード
                  </a>
                </li>
                <li
                  onMouseEnter={() => setMemberClassName("is-active")}
                  onMouseLeave={() => setMemberClassName("")}
                  className={memberClassName}
                >
                  <a
                    onClick={() => {
                      scrollElement("member");
                    }}
                  >
                    メンバー
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </section>
      <section id="Dwonload" className="section">
        <div className="panel">
          <h1 className="panel-heading">拡張機能のダウンロードはこちら</h1>
        </div>
        <div className="buttons is-centered">
          <a
            onClick={() => {
              clickButton();
            }}
            className={downloadClassName}
            href="downloadContent/a.txt"
            download="test.txt"
          >
            Download
          </a>
        </div>
      </section>
      <section id="tutorial" className="section">
        <div className="panel">
          <h1 className="panel-heading">使用方法</h1>
        </div>
        <div className="tile is-12 is-vertical is-parent">
          <div className="tile is-child box"></div>
        </div>
      </section>
      <section id="program" className="section">
        <div className="panel">
          <h1 className="panel-heading">ソースコード</h1>
        </div>
        <div className="tile is-12 is-vertical is-parent">
          <div className="tile is-child box">
            <p className="subtitle">
              ソースコードはこちらの<a>GitHubリポジトリ</a>から確認できます．
            </p>
          </div>
        </div>
      </section>
      <section id="member" className="section">
        <div className="panel">
          <h1 className="panel-heading">メンバー</h1>
        </div>
        <div className="tile is-12 is-vertical is-parent">
          <div className="tile is-child box">
            <p className="subtitle">・5417020 田子友唯</p>
            <p className="subtitle">・5420042 伊東晴紀</p>
            <p className="subtitle">・5420058 伊藤和斗</p>
          </div>
        </div>
      </section>
      <div
        className="buttons is-right"
        style={{ position: "fixed", top: 650, right: 10 }}
      >
        <button
          className="button"
          onClick={() => {
            returnTop();
          }}
        >
          上へ戻る
        </button>
      </div>
    </>
  );
}
