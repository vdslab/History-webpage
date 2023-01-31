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
            href="downloadContent/dist.zip"
            download="dist.zip"
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
          <div className="tile is-child box">
            <p className="subtitle">1，ダウンロードしたzipファイルを解凍する</p>
          </div>
          <div className="tile is-child box">
            <p className="subtitle">2，GoogleChromeの設定を開く</p>
            <img src="../images/start.png" style={{ width: 350 }} />
          </div>
          <div className="tile is-child box">
            <p className="subtitle">3，拡張機能の設定画面を開く</p>
            <img src="../images/setting.png" style={{ width: 300 }} />
          </div>
          <div className="tile is-child box">
            <p className="subtitle">4，拡張機能の設定</p>
            <img src="../images/extension1.png" style={{ width: 400 }} />
            <p></p>
            <img src="../images/extension2.png" style={{ width: 600 }} />
          </div>
          <div className="tile is-child box">
            <p className="subtitle">5，拡張機能の使用</p>
            <img src="../images/extension3.png" style={{ width: 400 }} />
            <p></p>
            <img src="../images/ans.png" style={{ width: 450 }} />
            <p className="subutitle">以上で拡張機能の使用方法は終わりです</p>
          </div>
          <div className="tile is-child box">
            <p className="subtitle">補足</p>
            <img src="../images/pin1.png" style={{ width: 400 }} />
            <p></p>
            <img src="../images/pin2.png" style={{ width: 300 }} />
          </div>
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
