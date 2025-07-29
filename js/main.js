document.addEventListener('DOMContentLoaded', () => {
    // Mobile menu toggle
    const mobileMenu = document.querySelector('.mobile-menu');
    const navLinks = document.querySelector('.nav-links');
    
    mobileMenu.addEventListener('click', () => {
        navLinks.classList.toggle('show');
        mobileMenu.classList.toggle('active');
    });

    // Smooth scroll for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const section = document.querySelector(this.getAttribute('href'));
            if (section) {
                section.scrollIntoView({
                    behavior: 'smooth'
                });
                // Close mobile menu if open
                if (window.innerWidth <= 768) {
                    navLinks.style.display = 'none';
                    mobileMenu.classList.remove('active');
                }
            }
        });
    });

    // Add solutions grid items dynamically (only if the grid exists)
    // const solutionsGrid = document.querySelector('.solutions-grid');
    // if (solutionsGrid) {
    //     const solutions = [
    //         { 
    //             title: 'Spatial Data Management',
    //             icon: '<i class="fas fa-database"></i>',
    //             description: 'Efficient storage and organization of geographic information with advanced spatial indexing.'
    //         },
    //         { 
    //             title: 'GIS Database Systems',
    //             icon: '<i class="fas fa-globe"></i>',
    //             description: 'Robust geographic information systems for complex spatial data analysis and mapping.'
    //         },
    //         { 
    //             title: 'Remote Sensing Data Processing',
    //             icon: '<i class="fas fa-satellite"></i>',
    //             description: 'Advanced processing of satellite and aerial imagery for actionable insights.'
    //         },
    //         { 
    //             title: 'Data Analytics & Visualization',
    //             icon: '<i class="fas fa-chart-line"></i>',
    //             description: 'Transform complex spatial data into clear, actionable visualizations and insights.'
    //         },
    //         { 
    //             title: 'Real-time Data Systems',
    //             icon: '<i class="fas fa-clock"></i>',
    //             description: 'Live monitoring and analysis of spatial data streams for immediate decision making.'
    //         },
    //         { 
    //             title: 'Cloud Data Infrastructure',
    //             icon: '<i class="fas fa-cloud"></i>',
    //             description: 'Scalable cloud solutions for storing and processing large spatial datasets.'
    //         },
    //         { 
    //             title: 'Data Integration Services',
    //             icon: '<i class="fas fa-sync"></i>',
    //             description: 'Seamless integration of multiple data sources into unified spatial information systems.'
    //         },
    //         { 
    //             title: 'Spatial Data Mining',
    //             icon: '<i class="fas fa-search"></i>',
    //             description: 'Extract valuable patterns and insights from large spatial datasets.'
    //         },
    //         { 
    //             title: 'Custom Data Solutions',
    //             icon: '<i class="fas fa-cogs"></i>',
    //             description: 'Tailored spatial data solutions designed for your specific business needs.'
    //         },
    //         { 
    //             title: 'Data Quality Control',
    //             icon: '<i class="fas fa-check-circle"></i>',
    //             description: 'Ensure accuracy and reliability of spatial data through rigorous quality checks.'
    //         },
    //         { 
    //             title: 'Data Security & Compliance',
    //             icon: '<i class="fas fa-shield-alt"></i>',
    //             description: 'Protect sensitive spatial data with industry-leading security measures.'
    //         },
    //         { 
    //             title: 'API & Web Services',
    //             icon: '<i class="fas fa-code"></i>',
    //             description: 'Access spatial data and functionality through modern, well-documented APIs.'
    //         }
    //     ];

    //     solutions.forEach(solution => {
    //         const card = document.createElement('div');
    //         card.className = 'solution-card';
    //         card.innerHTML = `
    //             <div class="solution-icon">${solution.icon}</div>
    //             <h3>${solution.title}</h3>
    //             <p class="solution-description">${solution.description}</p>
    //             <button class="learn-more">LEARN MORE</button>
    //         `;
    //         solutionsGrid.appendChild(card);
    //     });
    // }

    // Handle contact buttons
    const contactButtons = document.querySelectorAll('.contact-btn, .cta-btn');
    contactButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Replace with actual contact form or mailto link
            window.location.href = 'mailto:info@spatiosds.com';
        });
    });

    // Add scroll animation for elements
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe elements that should animate on scroll
    document.querySelectorAll('.solution-card, .value-prop').forEach(el => {
        observer.observe(el);
    });
});

// ==== Modal logic for Learn More buttons ====
const modal = document.getElementById('solutionModal');
const modalText = document.getElementById('modalText');
const closeBtn = document.querySelector('.close-btn');

const descriptions = {
    "Spatial Data Management": "<p><strong>Spatio's Spatial Data Management solutions</strong> revolutionize how organizations <em>store</em>, <em>organize</em>, and <em>access</em> their geographic information assets.<br>Our advanced <strong>spatial indexing technologies</strong> enable <span style><strong>lightning-fast retrieval</strong></span> of spatial data, regardless of dataset size or complexity.<br>We utilize cutting-edge database architectures tailored for spatial information, incorporating <strong><em>multi-dimensional indexing strategies</em></strong> that enhance query performance and ensure data integrity.</p><p><br>Our end-to-end approach includes <em>data standardization</em>, <em>metadata creation</em>, and <em>automated quality control</em> to maintain consistency and reliability.<br>We support <strong>industry-standard formats</strong> and coordinate systems, while allowing flexible schemas that adapt to evolving project requirements.<br>Through intelligent <strong>data partitioning</strong> and <strong>compression techniques</strong>, we optimize storage without compromising speed or accuracy.<br>The platform features robust <strong>version control</strong> for change tracking, historical record maintenance, and rollback functionality.<br>Seamless integration with enterprise systems is enabled via powerful <strong>APIs</strong> and <strong>web services</strong>, facilitating efficient data exchange.<br>Additionally, automated <strong>backup</strong> and <strong>disaster recovery</strong> mechanisms ensure your geographic data remains <em>secure</em> and <em>accessible</em>, supporting <strong>business continuity</strong> and compliance with regulatory standards.</p>",
    "GIS Database Systems": "<p><strong>Spatio delivers enterprise-grade GIS Database Systems</strong> that serve as the backbone for sophisticated spatial analysis and mapping applications. Our robust database architecture handles complex spatial queries with exceptional performance, supporting <em>advanced geometric operations</em>, <em>topological analysis</em>, and <em>multi-dimensional spatial relationships</em>.</p><p>Built on proven database technologies, our systems ensure <strong>data consistency</strong>, <strong>referential integrity</strong>, and <strong>ACID compliance</strong> for mission-critical applications. Our GIS database solutions feature sophisticated <strong>spatial indexing mechanisms</strong> including <em>R-tree</em>, <em>Quadtree</em>, and <em>Grid-based indexing</em> for optimal query performance. We implement advanced <strong>caching strategies</strong> and <strong>query optimization techniques</strong> that dramatically reduce response times for complex spatial operations. The system supports <strong>multiple concurrent users</strong> while maintaining data integrity through comprehensive <em>locking mechanisms</em> and <em>transaction management</em>. The platform offers extensive <strong>customization capabilities</strong>, allowing organizations to define <em>custom spatial data types</em>, implement <em>business-specific validation rules</em>, and create <em>automated workflows</em> for data processing. Our GIS databases seamlessly integrate with leading GIS software packages and support <strong>industry-standard spatial SQL extensions</strong>. With comprehensive <strong>security features</strong> including <em>role-based access control</em>, <em>data encryption</em>, and <em>audit trails</em>, organizations can confidently manage sensitive geographic information while meeting <strong>regulatory compliance</strong> requirements.</p>",
    "Remote Sensing Data Processing": "Spatio's Remote Sensing Data Processing capabilities transform raw satellite and aerial imagery into valuable, actionable intelligence for decision-making across various industries. Our advanced processing workflows handle multi-spectral, hyperspectral, LiDAR, and radar data from diverse satellite platforms and aerial sensors. We employ state-of-the-art algorithms for atmospheric correction, geometric rectification, and radiometric calibration to ensure the highest quality processed imagery. Our processing pipeline incorporates machine learning and artificial intelligence techniques for automated feature extraction, land cover classification, and change detection analysis. We utilize advanced image enhancement algorithms including pan-sharpening, noise reduction, and contrast optimization to maximize information extraction from imagery. The system supports batch processing of large datasets while maintaining consistent quality standards and processing parameters across multiple scenes. The platform features sophisticated temporal analysis capabilities, enabling monitoring of environmental changes, urban development patterns, and agricultural trends over time. Our cloud-based processing infrastructure scales automatically to handle varying workloads, from single-scene processing to large-scale mapping projects covering entire regions. With comprehensive quality control measures and validation procedures, we ensure that processed imagery meets the highest standards for accuracy and reliability, delivering insights that drive informed decision-making.",
    "Data Analytics & Visualization": "Spatio's Data Analytics & Visualization platform transforms complex spatial datasets into compelling visual narratives that drive strategic decision-making. Our advanced analytics engine employs sophisticated statistical methods, spatial analysis techniques, and predictive modeling to uncover hidden patterns and trends within geographic data. We utilize cutting-edge visualization technologies including interactive dashboards, 3D mapping, and augmented reality interfaces to present complex information in intuitive, accessible formats. Our platform supports real-time analytics processing, enabling organizations to monitor key performance indicators and spatial metrics as they evolve. We implement advanced clustering algorithms, hotspot analysis, and spatial correlation techniques to identify significant geographic patterns and anomalies. The system features customizable reporting capabilities that automatically generate executive summaries, detailed technical reports, and stakeholder presentations tailored to specific audience requirements. The visualization framework incorporates responsive design principles, ensuring optimal viewing experiences across desktop, tablet, and mobile devices. We provide extensive customization options for map styling, symbology, and thematic representations that align with organizational branding and communication standards. With built-in sharing and collaboration tools, teams can easily distribute insights, annotate findings, and maintain version control across multiple stakeholders, fostering data-driven decision-making throughout the organization.",
    "Real-time Data Systems": "Spatio's Real-time Data Systems deliver instantaneous processing and analysis of live spatial data streams, enabling organizations to respond rapidly to changing conditions and emerging opportunities. Our high-performance streaming architecture handles massive volumes of real-time geospatial data from IoT sensors, GPS tracking devices, satellite feeds, and mobile applications. We implement advanced event processing engines that detect patterns, anomalies, and threshold violations in real-time, triggering automated alerts and responses. Our system architecture utilizes distributed computing frameworks and in-memory processing technologies to achieve ultra-low latency data processing. We employ sophisticated buffering and queue management strategies to handle variable data rates and ensure no data loss during peak processing periods. The platform supports complex event correlation across multiple data streams, enabling comprehensive situational awareness and predictive analytics capabilities. The real-time monitoring dashboard provides instant visualization of live data streams through dynamic maps, charts, and gauges that update continuously. We implement intelligent notification systems that deliver targeted alerts via email, SMS, and mobile push notifications based on configurable business rules and user preferences. With robust failover mechanisms and redundant processing capabilities, our real-time systems ensure continuous operation and data availability, providing organizations with the confidence to make critical decisions based on live spatial intelligence.",
    "Cloud Data Infrastructure": "Spatio's Cloud Data Infrastructure provides enterprise-grade scalability and performance for managing massive spatial datasets in cloud environments. Our cloud-native architecture leverages distributed computing frameworks and containerized services to deliver elastic scalability that automatically adjusts to varying workload demands. We implement multi-tier storage strategies that optimize cost and performance by intelligently placing frequently accessed data on high-performance storage while archiving historical data on cost-effective cold storage solutions. Our infrastructure incorporates advanced data replication and synchronization mechanisms across multiple geographic regions, ensuring high availability and disaster recovery capabilities. We utilize content delivery networks (CDNs) and edge computing resources to minimize latency and improve data access speeds for global users. The platform features comprehensive monitoring and logging capabilities that provide detailed insights into system performance, usage patterns, and resource utilization. Security remains paramount in our cloud infrastructure design, with implementation of end-to-end encryption, network segmentation, and identity access management systems. We maintain compliance with industry standards including SOC 2, ISO 27001, and GDPR requirements. Our cloud solutions support hybrid deployments, allowing organizations to maintain sensitive data on-premises while leveraging cloud resources for processing and analytics. With automated backup, versioning, and restoration capabilities, organizations can confidently migrate their spatial data workloads to the cloud while maintaining complete control and visibility.",
    "Data Integration Services": "Spatio's Data Integration Services eliminate data silos by seamlessly connecting disparate spatial data sources into cohesive, unified information systems. Our integration platform supports a wide range of data formats including vector, raster, database, web services, and streaming data sources. We implement sophisticated ETL (Extract, Transform, Load) processes that automatically standardize coordinate systems, resolve schema differences, and maintain data quality throughout the integration process. Our integration framework features intelligent data mapping and transformation capabilities that handle complex spatial data conversions while preserving geometric accuracy and attribute integrity. We employ advanced conflict resolution algorithms to merge overlapping datasets and eliminate duplicate records. The system supports real-time synchronization between source systems and target databases, ensuring that integrated data remains current and consistent across all platforms. The platform provides comprehensive data lineage tracking and impact analysis capabilities, allowing organizations to understand data dependencies and assess the effects of changes across integrated systems. We implement robust error handling and validation procedures that identify and resolve data quality issues before they impact downstream applications. With support for both batch and streaming integration patterns, our services accommodate diverse organizational needs while maintaining optimal performance and reliability throughout the data integration lifecycle.",
    "Spatial Data Mining": "Spatio's Spatial Data Mining capabilities unlock hidden value within massive geographic datasets through advanced pattern recognition and knowledge discovery techniques. Our sophisticated algorithms analyze spatial relationships, temporal trends, and attribute correlations to identify meaningful patterns that would be impossible to detect through traditional analysis methods. We employ machine learning techniques including clustering, classification, and association rule mining specifically adapted for spatial data characteristics. Our data mining platform incorporates advanced spatial statistics and geostatistical methods to model spatial autocorrelation, identify spatial outliers, and detect significant clustering patterns. We utilize deep learning neural networks for complex pattern recognition tasks including land use classification, change detection, and predictive modeling. The system features automated feature selection and dimensionality reduction techniques that optimize model performance while reducing computational complexity. The platform provides interactive exploration tools that allow analysts to visually investigate discovered patterns and validate findings through statistical testing. We implement comprehensive model evaluation frameworks that assess accuracy, precision, and reliability of mining results. With support for both supervised and unsupervised learning approaches, our spatial data mining services accommodate diverse analytical objectives while delivering actionable insights that drive strategic decision-making and operational optimization.",
    "Custom Data Solutions": "Spatio specializes in developing Custom Data Solutions that address unique organizational requirements and industry-specific challenges. Our experienced team of spatial data engineers and domain experts collaborate closely with clients to understand their specific workflows, business objectives, and technical constraints. We design and implement bespoke solutions that seamlessly integrate with existing systems while providing enhanced capabilities for spatial data management, analysis, and visualization. Our custom development approach encompasses the entire solution lifecycle from requirements analysis and system design through implementation, testing, and deployment. We utilize agile development methodologies that ensure frequent client feedback and iterative refinement throughout the development process. Our solutions incorporate industry best practices for software architecture, user interface design, and system performance optimization to deliver robust, scalable applications. We provide comprehensive training and knowledge transfer services to ensure successful adoption of custom solutions within client organizations. Our ongoing support services include system maintenance, performance optimization, and feature enhancements that evolve with changing business requirements. With expertise spanning multiple industries including transportation, utilities, natural resources, and urban planning, we deliver custom spatial data solutions that provide competitive advantages and measurable business value.",
    "Data Quality Control": "Spatio's Data Quality Control framework implements comprehensive validation and verification procedures that ensure spatial data meets the highest standards for accuracy, completeness, and consistency. Our quality control processes employ automated validation rules, geometric verification algorithms, and statistical quality metrics to identify and flag potential data issues before they impact downstream applications. We implement industry-standard quality assurance procedures that comply with ISO 19157 geographic information quality standards. Our quality control platform features sophisticated topology validation capabilities that detect and correct geometric errors including overlaps, gaps, and invalid geometries. We employ advanced attribute validation techniques that verify data completeness, check value ranges, and validate referential integrity across related datasets. The system incorporates metadata validation to ensure comprehensive documentation and traceability of data quality metrics. The platform provides detailed quality assessment reports that document data accuracy statistics, completeness measurements, and consistency evaluations. We implement continuous monitoring capabilities that track data quality metrics over time and alert administrators to degradation in data quality. With customizable quality rules and configurable validation workflows, our quality control solutions adapt to specific organizational requirements while maintaining rigorous standards for data reliability and fitness for use.",
    "Data Security & Compliance": "Spatio's Data Security & Compliance solutions provide comprehensive protection for sensitive spatial information through multi-layered security architectures and strict adherence to regulatory requirements. Our security framework implements zero-trust principles with end-to-end encryption, secure authentication mechanisms, and granular access controls that protect data at rest, in transit, and during processing. We maintain compliance with international standards including ISO 27001, NIST Cybersecurity Framework, and industry-specific regulations. Our platform features advanced threat detection and response capabilities that monitor system activities, identify suspicious behaviors, and automatically implement protective measures against security threats. We employ blockchain technology for data integrity verification and immutable audit trails that provide tamper-evident records of all data access and modification activities. The system includes comprehensive backup and disaster recovery procedures that ensure business continuity while maintaining security standards. We provide detailed security assessments and vulnerability analyses that identify potential risks and recommend mitigation strategies. Our compliance management tools automatically generate compliance reports and maintain documentation required for regulatory audits. With regular security updates and proactive monitoring services, we ensure that spatial data assets remain protected against evolving cyber threats while meeting the strictest regulatory and industry compliance requirements.",
    "API & Web Services": "Spatio's API & Web Services platform provides seamless programmatic access to spatial data and analytical capabilities through RESTful APIs and industry-standard web services. Our APIs are designed following OpenAPI specifications with comprehensive documentation, interactive testing interfaces, and extensive code examples that facilitate rapid integration and development. We support multiple data formats including GeoJSON, WFS, WMS, and WCS standards for maximum interoperability with existing systems. Our web services architecture implements robust authentication and authorization mechanisms including OAuth 2.0, API keys, and JWT tokens to ensure secure access to spatial resources. We provide rate limiting, request throttling, and usage monitoring capabilities that maintain optimal service performance while preventing abuse. The platform features comprehensive error handling and status reporting that provide clear feedback for troubleshooting and debugging integration issues. The API platform includes sophisticated caching and optimization techniques that ensure fast response times for frequently requested data and operations. We provide SDKs and client libraries for popular programming languages including Python, JavaScript, Java, and .NET to accelerate development efforts. With version management and backward compatibility support, our APIs evolve continuously while maintaining stability for existing integrations, enabling organizations to build robust spatial applications with confidence."
};

document.querySelectorAll('.learn-more').forEach(button => {
    button.addEventListener('click', () => {
        const title = button.getAttribute('data-title');
        modalText.innerHTML = `
            <h2>${title}</h2>
            <p>${descriptions[title] || "Description coming soon."}</p>
        `;
        modal.style.display = 'block';
    });
});

closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});

window.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});
