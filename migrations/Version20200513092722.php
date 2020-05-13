<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20200513092722 extends AbstractMigration
{
    public function getDescription() : string
    {
        return '';
    }

    public function up(Schema $schema) : void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('CREATE TABLE sylius_refund_refund (id INT AUTO_INCREMENT NOT NULL, order_number VARCHAR(255) NOT NULL, amount INT NOT NULL, refunded_unit_id INT DEFAULT NULL, type VARCHAR(256) COMMENT "sylius_refund_refund_type" NOT NULL COMMENT \'(DC2Type:sylius_refund_refund_type)\', PRIMARY KEY(id)) DEFAULT CHARACTER SET UTF8 COLLATE `UTF8_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE sylius_refund_customer_billing_data (id INT AUTO_INCREMENT NOT NULL, customer_name VARCHAR(255) NOT NULL, street VARCHAR(255) NOT NULL, postcode VARCHAR(255) NOT NULL, country_code VARCHAR(255) NOT NULL, city VARCHAR(255) NOT NULL, company VARCHAR(255) DEFAULT NULL, province_name VARCHAR(255) DEFAULT NULL, province_code VARCHAR(255) DEFAULT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET UTF8 COLLATE `UTF8_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE sylius_refund_credit_memo_sequence (id INT AUTO_INCREMENT NOT NULL, idx INT NOT NULL, version INT DEFAULT 1 NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET UTF8 COLLATE `UTF8_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE sylius_refund_shop_billing_data (id INT AUTO_INCREMENT NOT NULL, company VARCHAR(255) DEFAULT NULL, tax_id VARCHAR(255) DEFAULT NULL, country_code VARCHAR(255) DEFAULT NULL, street VARCHAR(255) DEFAULT NULL, city VARCHAR(255) DEFAULT NULL, postcode VARCHAR(255) DEFAULT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET UTF8 COLLATE `UTF8_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE sylius_refund_credit_memo (id VARCHAR(255) NOT NULL, from_id INT DEFAULT NULL, to_id INT DEFAULT NULL, channel_id INT DEFAULT NULL, number VARCHAR(255) NOT NULL, order_number VARCHAR(255) NOT NULL, total INT NOT NULL, units JSON NOT NULL, currency_code VARCHAR(255) NOT NULL, locale_code VARCHAR(255) NOT NULL, comment LONGTEXT NOT NULL, issued_at DATETIME DEFAULT NULL, UNIQUE INDEX UNIQ_5C4F333178CED90B (from_id), UNIQUE INDEX UNIQ_5C4F333130354A65 (to_id), INDEX IDX_5C4F333172F5A1AA (channel_id), INDEX IDX_5C4F3331551F0F81 (order_number), PRIMARY KEY(id)) DEFAULT CHARACTER SET UTF8 COLLATE `UTF8_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE sylius_refund_payment (id INT AUTO_INCREMENT NOT NULL, payment_method_id INT DEFAULT NULL, order_number VARCHAR(255) NOT NULL, amount INT NOT NULL, currency_code VARCHAR(255) NOT NULL, state VARCHAR(255) NOT NULL, INDEX IDX_EFA5A4B25AA1164F (payment_method_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET UTF8 COLLATE `UTF8_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE bitbag_mollie_configuration (id INT AUTO_INCREMENT NOT NULL, payment_surcharge_fee INT DEFAULT NULL, method_image_id INT DEFAULT NULL, gateway_id INT DEFAULT NULL, method_id VARCHAR(255) NOT NULL, name VARCHAR(255) NOT NULL, enabled TINYINT(1) NOT NULL, image LONGTEXT NOT NULL COMMENT \'(DC2Type:array)\', minimum_amount LONGTEXT NOT NULL COMMENT \'(DC2Type:array)\', maximum_amount LONGTEXT NOT NULL COMMENT \'(DC2Type:array)\', payment_type VARCHAR(255) NOT NULL, country LONGTEXT NOT NULL COMMENT \'(DC2Type:array)\', can_refunded TINYINT(1) NOT NULL, issuers LONGTEXT DEFAULT NULL COMMENT \'(DC2Type:array)\', country_level LONGTEXT DEFAULT NULL COMMENT \'(DC2Type:array)\', order_expiration INT DEFAULT NULL, UNIQUE INDEX UNIQ_23CC85045E237E06 (name), UNIQUE INDEX UNIQ_23CC8504EB71DAB7 (payment_surcharge_fee), UNIQUE INDEX UNIQ_23CC8504DBC26BFF (method_image_id), INDEX IDX_23CC8504577F8E00 (gateway_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET UTF8 COLLATE `UTF8_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE bitbag_subscription (id INT AUTO_INCREMENT NOT NULL, order_id INT DEFAULT NULL, subscription_id VARCHAR(255) DEFAULT NULL, customer_id VARCHAR(255) DEFAULT NULL, state VARCHAR(255) NOT NULL, UNIQUE INDEX UNIQ_97993F5D9A1887DC (subscription_id), UNIQUE INDEX UNIQ_97993F5D9395C3F3 (customer_id), UNIQUE INDEX UNIQ_97993F5D8D9F6D38 (order_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET UTF8 COLLATE `UTF8_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE bitbag_mollie_method_image (id INT AUTO_INCREMENT NOT NULL, name VARCHAR(255) DEFAULT NULL, path VARCHAR(255) DEFAULT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET UTF8 COLLATE `UTF8_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE bitbag_mollie_logger (id INT AUTO_INCREMENT NOT NULL, level INT NOT NULL, error_code INT NOT NULL, message VARCHAR(255) NOT NULL, date_time DATETIME NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET UTF8 COLLATE `UTF8_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE bitbag_mollie_configuration_surcharge_fee (id INT AUTO_INCREMENT NOT NULL, type VARCHAR(255) DEFAULT NULL, fixed_amount DOUBLE PRECISION DEFAULT NULL, percentage DOUBLE PRECISION DEFAULT NULL, surcharge_limit DOUBLE PRECISION DEFAULT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET UTF8 COLLATE `UTF8_unicode_ci` ENGINE = InnoDB');
        $this->addSql('ALTER TABLE sylius_refund_credit_memo ADD CONSTRAINT FK_5C4F333178CED90B FOREIGN KEY (from_id) REFERENCES sylius_refund_customer_billing_data (id)');
        $this->addSql('ALTER TABLE sylius_refund_credit_memo ADD CONSTRAINT FK_5C4F333130354A65 FOREIGN KEY (to_id) REFERENCES sylius_refund_shop_billing_data (id)');
        $this->addSql('ALTER TABLE sylius_refund_credit_memo ADD CONSTRAINT FK_5C4F333172F5A1AA FOREIGN KEY (channel_id) REFERENCES sylius_channel (id)');
        $this->addSql('ALTER TABLE sylius_refund_payment ADD CONSTRAINT FK_EFA5A4B25AA1164F FOREIGN KEY (payment_method_id) REFERENCES sylius_payment_method (id)');
        $this->addSql('ALTER TABLE bitbag_mollie_configuration ADD CONSTRAINT FK_23CC8504EB71DAB7 FOREIGN KEY (payment_surcharge_fee) REFERENCES bitbag_mollie_configuration_surcharge_fee (id)');
        $this->addSql('ALTER TABLE bitbag_mollie_configuration ADD CONSTRAINT FK_23CC8504DBC26BFF FOREIGN KEY (method_image_id) REFERENCES bitbag_mollie_method_image (id)');
        $this->addSql('ALTER TABLE bitbag_mollie_configuration ADD CONSTRAINT FK_23CC8504577F8E00 FOREIGN KEY (gateway_id) REFERENCES sylius_gateway_config (id)');
        $this->addSql('ALTER TABLE bitbag_subscription ADD CONSTRAINT FK_97993F5D8D9F6D38 FOREIGN KEY (order_id) REFERENCES sylius_order (id)');
    }

    public function down(Schema $schema) : void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('ALTER TABLE sylius_refund_credit_memo DROP FOREIGN KEY FK_5C4F333178CED90B');
        $this->addSql('ALTER TABLE sylius_refund_credit_memo DROP FOREIGN KEY FK_5C4F333130354A65');
        $this->addSql('ALTER TABLE bitbag_mollie_configuration DROP FOREIGN KEY FK_23CC8504DBC26BFF');
        $this->addSql('ALTER TABLE bitbag_mollie_configuration DROP FOREIGN KEY FK_23CC8504EB71DAB7');
        $this->addSql('DROP TABLE sylius_refund_refund');
        $this->addSql('DROP TABLE sylius_refund_customer_billing_data');
        $this->addSql('DROP TABLE sylius_refund_credit_memo_sequence');
        $this->addSql('DROP TABLE sylius_refund_shop_billing_data');
        $this->addSql('DROP TABLE sylius_refund_credit_memo');
        $this->addSql('DROP TABLE sylius_refund_payment');
        $this->addSql('DROP TABLE bitbag_mollie_configuration');
        $this->addSql('DROP TABLE bitbag_subscription');
        $this->addSql('DROP TABLE bitbag_mollie_method_image');
        $this->addSql('DROP TABLE bitbag_mollie_logger');
        $this->addSql('DROP TABLE bitbag_mollie_configuration_surcharge_fee');
    }
}
