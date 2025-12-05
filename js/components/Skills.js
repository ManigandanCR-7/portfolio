function SkillBar({ skill, level, color = "serene" }) {
  return (
    <div className="mb-6 fade-in" data-id="484ohis2t" data-path="js/components/Skills.js">
      <div className="flex justify-between mb-1" data-id="ugjq7isgz" data-path="js/components/Skills.js">
        <span className="font-medium text-gray-700" data-id="799fhh5hu" data-path="js/components/Skills.js">{skill}</span>
        <span className="text-sm text-gray-500" data-id="2l4vqezgs" data-path="js/components/Skills.js">{level}%</span>
      </div>
      <div className="h-2 bg-gray-200 rounded-full" data-id="lrng14w5r" data-path="js/components/Skills.js">
        <div
          className={`h-2 rounded-full bg-${color}-500`}
          style={{ width: `${level}%` }} data-id="0mhwlf9an" data-path="js/components/Skills.js"></div>
      </div>
    </div>);

}

function Skills() {
  const technicalSkills = [
  { skill: "JavaScript", level: 95 },
  { skill: "React.js", level: 90 },
  { skill: "HTML5/CSS3", level: 95 },
  { skill: "Php", level: 85 },
  { skill: "UI/UX Design", level: 80 }];


  const softSkills = [
  { skill: "Project Management", level: 85 },
  { skill: "Team Leadership", level: 80 },
  { skill: "Communication", level: 90 },
  { skill: "Problem Solving", level: 95 },
  { skill: "Time Management", level: 85 }];


  return (
    <section id="skills" className="py-16 bg-white" data-id="2u6hv9d98" data-path="js/components/Skills.js">
      <div className="blog-container" data-id="xjzwrh7s3" data-path="js/components/Skills.js">
        <div className="text-center mb-12" data-id="u72881um3" data-path="js/components/Skills.js">
          <span className="inline-block px-4 py-1 rounded-full bg-serene-100 text-serene-700 font-medium text-sm mb-4" data-id="j1suekdb1" data-path="js/components/Skills.js">
            My Expertise
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4" data-id="fwjoj7btl" data-path="js/components/Skills.js">Skills & Proficiencies</h2>
          <p className="text-gray-600 max-w-2xl mx-auto" data-id="102zxkhrm" data-path="js/components/Skills.js">
            I've developed a diverse set of skills throughout my career, always striving to learn and improve.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12" data-id="ogcq0c3k0" data-path="js/components/Skills.js">
          <div className="fade-in" data-id="8lsukb5xl" data-path="js/components/Skills.js">
            <h3 className="text-xl font-semibold mb-6 text-serene-700" data-id="zvy1k74q5" data-path="js/components/Skills.js">Technical Skills</h3>
            {technicalSkills.map((skill, index) =>
            <SkillBar
              key={index}
              skill={skill.skill}
              level={skill.level} />

            )}
          </div>
          
          <div className="fade-in" style={{ animationDelay: '0.3s' }} data-id="yebuqrveb" data-path="js/components/Skills.js">
            <h3 className="text-xl font-semibold mb-6 text-calm-700" data-id="xq7tfmoec" data-path="js/components/Skills.js">Soft Skills</h3>
            {softSkills.map((skill, index) =>
            <SkillBar
              key={index}
              skill={skill.skill}
              level={skill.level}
              color="calm" />

            )}
          </div>
        </div>
        
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-center" data-id="h4lql1bgu" data-path="js/components/Skills.js">
          <div className="bg-serene-50 p-6 rounded-lg fade-in" data-id="btlpv8xc1" data-path="js/components/Skills.js">
            <div className="text-4xl text-serene-500 mb-4" data-id="r158uzbue" data-path="js/components/Skills.js">
              <i className="fas fa-laptop-code" data-id="ttdmmyyr6" data-path="js/components/Skills.js"></i>
            </div>
            <h3 className="text-lg font-semibold mb-2" data-id="suv3i860x" data-path="js/components/Skills.js">Frontend Development</h3>
            <p className="text-gray-600 text-sm" data-id="a95cnq31v" data-path="js/components/Skills.js">Creating beautiful, responsive, and accessible user interfaces</p>
          </div>
          
          <div className="bg-serene-50 p-6 rounded-lg fade-in" style={{ animationDelay: '0.1s' }} data-id="70mf7fzpp" data-path="js/components/Skills.js">
            <div className="text-4xl text-serene-500 mb-4" data-id="m0ogntcvv" data-path="js/components/Skills.js">
              <i className="fas fa-server" data-id="5x2x67mhh" data-path="js/components/Skills.js"></i>
            </div>
            <h3 className="text-lg font-semibold mb-2" data-id="e738u7vvx" data-path="js/components/Skills.js">Backend Development</h3>
            <p className="text-gray-600 text-sm" data-id="e9gvdvxp5" data-path="js/components/Skills.js">Building robust server-side applications and APIs</p>
          </div>
          
          <div className="bg-serene-50 p-6 rounded-lg fade-in" style={{ animationDelay: '0.2s' }} data-id="07vbaxhpc" data-path="js/components/Skills.js">
            <div className="text-4xl text-serene-500 mb-4" data-id="npvjp0isf" data-path="js/components/Skills.js">
              <i className="fas fa-paint-brush" data-id="xowr778vk" data-path="js/components/Skills.js"></i>
            </div>
            <h3 className="text-lg font-semibold mb-2" data-id="xww0y8uy9" data-path="js/components/Skills.js">UI/UX Design</h3>
            <p className="text-gray-600 text-sm" data-id="170ub0xmj" data-path="js/components/Skills.js">Designing intuitive and engaging user experiences</p>
          </div>
          
          <div className="bg-serene-50 p-6 rounded-lg fade-in" style={{ animationDelay: '0.3s' }} data-id="0ir17ddof" data-path="js/components/Skills.js">
            <div className="text-4xl text-serene-500 mb-4" data-id="zkox7trvr" data-path="js/components/Skills.js">
              <i className="fas fa-mobile-alt" data-id="6hv97r9yi" data-path="js/components/Skills.js"></i>
            </div>
            <h3 className="text-lg font-semibold mb-2" data-id="h0kjy2qsz" data-path="js/components/Skills.js">Mobile Development</h3>
            <p className="text-gray-600 text-sm" data-id="bpsoyf55o" data-path="js/components/Skills.js">Building cross-platform Mobile Web applications on Android</p>
          </div>
        </div>
      </div>
    </section>);


}
