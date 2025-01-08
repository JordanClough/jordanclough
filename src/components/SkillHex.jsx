function SkillHex({ label, Icon }) {
    return (
        <div className="skill-hex">
            <Icon className="skill-icon" />
            <h2>{label}</h2>
        </div>
    )
}

export default SkillHex;