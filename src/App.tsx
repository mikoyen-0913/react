import { useState } from 'react'
import './App.css'

function App() {

  return (
    <>
      <header className="profile-header">
        <h1>閻玟的自我介紹</h1>
        <h2>淡江大學資管系大三</h2>
        <h3>2003/09/13</h3>
        <p>最近剛滿21歲!</p>
      </header>

      <div className="content">
        <div className="left-side">
          <section className="skills-section card">
            <h4>興趣</h4>
            <ul>
              <li>烹飪</li>
              <li>打羽毛球</li>
              <li>K-pop, K-drama</li>
            </ul>
          </section>

          <section className="experience-section card">
            <h4>經歷</h4>
            <ul>
              <li><em>2018</em>&nbsp;<strong>中正高中</strong>
                <li>
                  舞蹈研究社
                </li>
              </li>
              <li><em>2024</em>&nbsp;<strong>大二暑假</strong>
                <li>
                  參與2024 WAT計畫
                </li>
              </li>
            </ul>
          </section>
        </div>

        <div className="right-side">
          <section className="certification-section card">
            <h4>喜歡的K-pop團體</h4>
            <div className="cert-item">
              <h5>BOYNEXTDOOR</h5>
              <img width="150" src="https://kpopreviewed.com/wp-content/uploads/2024/09/boynextdoor-newguy.png?w=1200&h=628&crop=1" alt="BOYNEXTDOOR" />
            </div>
            <div className="cert-item">
              <h5>Le sserafim</h5>
              <img width="150" src="https://a.ksd-i.com/s/480x_86400_6c52175c4192b0d66013d2e54b8eb586/static.koreastardaily.com/2024-08-30/154766-1012407.jpg" alt="Le sserafim" />
            </div>
          </section>

          <section className="cert-info-section card">
            <h4>更深入認識這些團體</h4>
            <table>
              <thead>
                <tr>
                  <th>團體名稱</th>
                  <th>youtube頻道</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>BOYNEXTDOOR</td>
                  <td><a href="https://www.youtube.com/@boynextdoor_official" target="_blank" rel="noopener noreferrer">點擊前往頻道</a></td>
                </tr>
                <tr>
                  <td>Le sserafim</td>
                  <td><a href="https://www.youtube.com/@LESSERAFIM_official" target="_blank" rel="noopener noreferrer">點擊前往頻道</a></td>
                </tr>
              </tbody>
            </table>
          </section>
        </div>
      </div>
    </>
  );
}

export default App;
