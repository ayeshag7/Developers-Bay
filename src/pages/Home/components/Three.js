import { ServiceCard } from "../../../components/ServiceCard";

export const Three = () => {

  const tickIcon = <i class="text-iconcolor text-xl bi bi-check-lg"></i>;
  const belowText = "text-xs text-projectshadow"

  const row = "flex flex-col";

  const column = "my-4 flex flex-col items-start gap-y-0";
  const columnItem = "flex justify-start gap-x-1 items-center"



  const titlesR1 = ["Website Development", "Web Scraping", "Web Automation", "Chrome Extension Development"];
  const titlesR2 = ["Data Analysis & Visualization", "Debugging & Maintenance", "AI Integration", "Chat bot Development"];

  const iconsR1 = [<i className="text-iconcolor text-5xl bi bi-globe2"></i>, <i class="text-iconcolor text-5xl bi bi-trash3"></i>, <i class="text-iconcolor text-5xl bi bi-tropical-storm"></i>, <i class="text-iconcolor text-5xl bi bi-browser-chrome"></i>]
  const iconsR2 = [<i class="text-iconcolor text-5xl bi bi-graph-up-arrow"></i>, <i class="text-iconcolor text-5xl bi bi-wrench-adjustable-circle"></i>,<i class="text-iconcolor text-5xl bi bi-ui-checks-grid"></i>,  <i class="text-iconcolor text-5xl bi bi-android2"></i>]



  return (
    <main className="flex flex-col items-center bg-white">

      <h1 className="text-4xl text-center mt-16 text-projectshadow font-bold">All Your Services in One Place</h1>
      
      {/* div containing the rows container i.e., the main div */}
      <div className="flex justify-center mt-16 mb-16">

        {/* div containing the two rows */}
        <div className="flex flex-col items-center gap-y-8">

            {/* put first row here */}
            <div className="flex justify-around md:justify-start gap-x-8 flex-wrap">

              {/* r1-c1 */}
              <div className={row}>
                <ServiceCard icon={iconsR1[0]} serviceText={titlesR1[0]}/>
                <ul className={column}>
                  <li className={columnItem}>
                    {tickIcon}
                    <p className={belowText}>Custom</p>
                  </li>
                  <li className={columnItem}>
                    {tickIcon}
                    <p className={belowText}>Shopify</p>
                  </li>
                  <li className={columnItem}>
                    {tickIcon}
                    <p className={belowText}>Squarespace</p>
                  </li>
                </ul>
              </div>

              {/* r1-c2 */}
              <div className={row}>
                <ServiceCard icon={iconsR1[1]} serviceText={titlesR1[1]}/>
                <ul className={column}>
                  <li className={columnItem}>
                    {tickIcon}
                    <p className={belowText}>DOM Parsing</p>
                  </li>
                  <li className={columnItem}>
                    {tickIcon}
                    <p className={belowText}>API Based</p>
                  </li>
                  <li className={columnItem}>
                    {tickIcon}
                    <p className={belowText}>Web Crawlers</p>
                  </li>
                </ul>
              </div>

              {/* r1-c3 */}
              <div className={row}>
                <ServiceCard icon={iconsR1[2]} serviceText={titlesR1[2]}/>
                <ul className={column}>
                  <li className={columnItem}>
                    {tickIcon}
                    <p className={belowText}>Web Tasks Scheduling</p>
                  </li>
                  <li className={columnItem}>
                    {tickIcon}
                    <p className={belowText}>We Accessibility Testing</p>
                  </li>
                </ul>
              </div>

              {/* r1-c4 */}
              <div className={row}>
                <ServiceCard icon={iconsR1[3]} serviceText={titlesR1[3]}/>
                <p className="text-xs text-projectshadow my-4">
                  Extensions that cater to your
                  <br />
                  specific needs, seamlessly
                  <br />
                  integrated with the browser.
                </p>
              </div>

            </div>

          
            {/* put second row here */}
            <div className="flex justify-around md:justify-start gap-x-8 flex-wrap">
              
              {/* r2-c1 */}
              <div className={row}>
                <ServiceCard icon={iconsR2[0]} serviceText={titlesR2[0]}/>
                <ul className={column}>
                  <li className={columnItem}>
                    {tickIcon}
                    <p className={belowText}>Predictive Modeling</p>
                  </li>
                  <li className={columnItem}>
                    {tickIcon}
                    <p className={belowText}>Perscriptive Analysis</p>
                  </li>
                  <li className={columnItem}>
                    {tickIcon}
                    <p className={belowText}>BI Dashboards</p>
                  </li>
                </ul>
              </div>

              {/* r2-c2 */}
              <div className={row}>
                <ServiceCard icon={iconsR2[1]} serviceText={titlesR2[1]}/>
                <ul className={column}>
                  <li className={columnItem}>
                    {tickIcon}
                    <p className={belowText}>Bug Fixing</p>
                  </li>
                  <li className={columnItem}>
                    {tickIcon}
                    <p className={belowText}>Performance Optimization</p>
                  </li>
                  <li className={columnItem}>
                    {tickIcon}
                    <p className={belowText}>Code Review</p>
                  </li>
                </ul>
              </div>

              {/* r2-c3 */}
              <div className={row}>
                <ServiceCard icon={iconsR2[2]} serviceText={titlesR2[2]}/>
                <ul className={column}>
                  <li className={columnItem}>
                    {tickIcon}
                    <p className={belowText}>AI Integration with IoT</p>
                  </li>
                  <li className={columnItem}>
                    {tickIcon}
                    <p className={belowText}>AI Monitoring</p>
                  </li>
                </ul>
              </div>

              {/* r2-c4 */}
              <div className={row}>
                <ServiceCard icon={iconsR2[3]} serviceText={titlesR2[3]}/>
                <p className="text-xs text-projectshadow my-4">
                AI Chat bots and
                <br />
                Virtual Assistants
                </p>
              </div>

            </div>


          </div>
      </div>

      <div className="flex flex-col mb-12">
        <p className="text-lg text-projectshadow font-bold">Learn More</p>
        <div className="bg-iconcolor h-1.5 w-24"></div>
      </div>

    </main>
  )
}
